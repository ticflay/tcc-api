import { RequestHandler } from "express";
import { User } from "../models/user";
import { FormUser } from "../models/formUser";
import { AnswerForm } from "../models/answer";
import { Question } from "../models/question";

export const createAnswers: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const currentUser = await User.findByPk(currentUserId);
    let lastForm = await FormUser.findOne({order: [['createdAt','DESC']], where: {finished: false, userId: currentUser?.id}})
    const {answer, questionId} = req.body;
    const question = await Question.findByPk(questionId);

    if(!lastForm) {
        lastForm = await FormUser.create({
            userId: currentUser?.id,
            user: currentUser
        });
    }
    if(question) {
        const oldAnswer = await AnswerForm.findOne({where: {
            questionId: question.id,
            formUserId: lastForm.id
        }})
        if(oldAnswer) {
            const answerQuestion = await AnswerForm.findByPk(oldAnswer.id);
            answerQuestion?.set({answer});
            await answerQuestion?.save();
            return res.json({answer: answerQuestion?.dataValues});
        }else {
            const answerCreated =  await AnswerForm.create({
                answer,
                questionId: question.id,
                question: question,
                formUserId: lastForm.id,
                formUser: lastForm
            })
            return res.json({answer: answerCreated.dataValues})
        }
    }else {
        return res.status(404).json({error: "Pergunta não encontrada!"})
    }
    
}


export const getAnswers: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const currentUser = await User.findByPk(currentUserId);
    const {formId} = req.params;
    let form = await FormUser.findByPk(formId)
    if(form) {
        const answers = await AnswerForm.findAll({where: {formUserId: form?.id}})
        return res.json({answers: answers});
    }else {
        return res.status(404).json({error: "Formulário não encontrado!"})
    }
}