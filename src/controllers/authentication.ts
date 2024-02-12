import { NextFunction, Request, RequestHandler, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';
import { cpf as CPF, cnpj } from 'cpf-cnpj-validator'; 
import * as EmailValidator from 'email-validator';
import { isValidPhoneNumber } from "libphonenumber-js";
import { secret_key } from "../utils/secret-key";


// 

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { email, telephone, password, name } = req.body;
    console.log('body',req.body)
    const user = await User.findOne({
      where: {
        [Op.or]: {
          email,
          telephone
        },
      },
    });
    // if(!countryId || countryId.length === 0 ) {
    //   return res.status(400).json({error: "Informe o seu país!"})
    // }
    if (!password || password.length === 0) {
      return res.status(400).json({error: "Uma senha deve ser informada!"})
    }
    if(!email || email.length === 0 || !EmailValidator.validate(email)) {
      return res.status(400).json({error: "E-mail inválido!"})
    }
    if(!telephone || isValidPhoneNumber(telephone)) {
      return res.status(400).json({error: "Informe um número de telegone válido!"})
    }
    if(!name || name.length === 0) {
      return res.status(400).json({error: "Informe um nome!"})
    }
    if (!user) {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = { ...req.body, type: 'member', password: hash };
        if (err) throw err;
       try {
        const userResponse = await User.create({...user});
        console.log('user response', userResponse)
        const { password, ...rest } = userResponse.dataValues;
        const token = jwt.sign({id: user.id, email: user.email}, secret_key)
        res
        .status(200)
        .json({ message: "Cadastro realizado com sucesso!", currentUser: rest, token });
       }catch (err) {
        next(err)
       }
            });

    } else {
      const email = user.email === req.body.email ? "Email " : "";
      const telephone = user.telephone === req.body.telephone ? "Telefone" : "";
      const message = `Já existe um usuário cadastrado com os dados informados, verifique: ${email} ${telephone}`;
      res.status(409).json({ error: message });
    }
  } catch (err) {
    next(err);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!password || password.length === 0) {
        return res.status(400).json({error: "Uma senha deve ser informada!"})
      }
    const user = await User.findOne({
        where: {
            email: email,
        },
      }).catch((err) => console.log(err));
      if (user) {
        const isSamePassword = await bcrypt.compare(
          password,
          user.password
        );
        if (isSamePassword) {
            user.set({ lastLogin: new Date() });
            await user.save();
          const token = jwt.sign({id: user.id, email: user.email}, secret_key)

          res.json({
            currentUser: user,
            token
          });
        } else {
          res.status(401).json({error: "Senha Incorreta!"})
        }
      } else {
        res.status(401).json({error: "Usuário não cadastrado no sistema!"});
      }
  }catch(err) {
    next(err);
  }
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log('entra aq no authmiddlaware?')
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token malformado.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformado.' });
  }

  jwt.verify(token, secret_key, (err, decoded: any) => {
    console.log('entra aq no verify, entao', err, decoded);

    if (err) {
      return res.status(401).json({ error: 'Token inválido.' });
    }
    console.log('é aqui que da erro?', decoded.id)

    req.userId = decoded.id;

    return next();
  });
};

export const authMiddlewareAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Token malformado.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformado.' });
  }

  jwt.verify(token, secret_key, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    req.userId = decoded.id;
    User.findByPk(decoded.id).then((user) => {
      if(user) {
        if(user.type !== 'admin'){
          return res.status(401).json({ error: 'Sem autorização.' });
        }
      }
    }).catch((err) => res.status(401).json({error: "Sem autorização."}))
    return next();
  });
};
