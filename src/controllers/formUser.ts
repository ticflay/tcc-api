import { RequestHandler } from "express";
import { User } from "../models/user";
import { FormUser } from "../models/formUser";
import { Question } from "../models/question";
import { AnswerForm } from "../models/answer";
import { Op } from "sequelize";

export const getCurrentForm: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const currentUser = await User.findByPk(currentUserId);
    const form = await FormUser.findOne({where: {userId: currentUser?.dataValues.id, finished: false }, order: [['createdAt', 'DESC']], limit: 1});
    if(form) {
        return res.json({form: form.dataValues});
    }else {
        return res.status(204).json()
    }
}

export const createForm: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const {blank} = req.body;
    const currentUser = await User.findByPk(currentUserId);
    const form = await FormUser.create({
        userId: currentUser?.id,
        user: currentUser,
        finished: false
    });
    if(blank) {
        return res.json({form: form.dataValues})
    }else {
        const lastForm = await FormUser.findOne({where: {userId: currentUser?.dataValues.id, finished: true }, order: [['createdAt', 'DESC']], limit: 1});
        const answers = await AnswerForm.findAll({where: {formUserId: lastForm?.dataValues.id} });
        const newAnswers = await Promise.all(answers.map(async item => {
            const question = await Question.findByPk(item.questionId);
            return {
                question: question,
                answer: item.answer,
                questionId: question?.id,
                formUser: form,
                formUserId: form.id
            }
        }))
        const answerForm = await AnswerForm.bulkCreate(newAnswers);
        return res.json({form: form.dataValues, formAnswer: answerForm})
    }
    
}

export const finishForm: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const {formId} = req.body;
    const currentUser = await User.findByPk(currentUserId);
    const form = await FormUser.findByPk(formId);
    form?.set({finished: true});
    await form?.save();
    return res.json({form: form?.dataValues})
}

export const deleteForm: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const {formId} = req.params;
    const currentUser = await User.findByPk(currentUserId);
    const form = await FormUser.findByPk(formId);
    const formAnswers = await AnswerForm.findAll({where: {formUserId: form?.id}});
    await Promise.all(formAnswers.map(async (f) => {
        await f.destroy();
    }))
    await form?.destroy();
    return res.json({form: undefined, formAnswers: undefined, message: "Avaliação descartada com sucesso!"})
}

export const restoreForm: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const {formId} = req.body;
    try {
        const currentUser = await User.findByPk(currentUserId);
    const form = await FormUser.restore({where: {id: formId}});
    const formAnswers = await AnswerForm.restore({where: {formUserId: formId}});
    return res.json({form: form, formAnswers: formAnswers, message: "Avaliação restaurada com sucesso!"})
    }catch(err) {
        console.log('err', err)
        return res.status(500).json({error: "Erro interno do servidor! Tente novamente"})
    }
}

export const getAllForms: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    try {
        const currentUser = await User.findByPk(currentUserId);
        if(!currentUser) {
            return res.status(401).json({error: "Erro de autenticação, faça login novamente!"})
        }else {
            const forms = await FormUser.findAll({where: {userId: currentUser?.id}})
            return res.json({forms})
        }
        
    }catch(err){
        return res.status(500).json({error: "Erro interno do servidor! Tente novamente"})
    }
}

export const getAllDeletedForms: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    try {
        const currentUser = await User.findByPk(currentUserId);
        if(!currentUser) {
            return res.status(401).json({error: "Erro de autenticação, faça login novamente!"})
        }else {
            const forms = await FormUser.findAll({where: {userId: currentUser?.id, finished: true, deletedAt: {[Op.not]: null}}, paranoid: false})
            return res.json({deletedForms:  forms})
        }
        
    }catch(err){
        console.log('err', err)
        return res.status(500).json({error: "Erro interno do servidor! Tente novamente"})
    }
}