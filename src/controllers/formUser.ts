import { RequestHandler } from "express";
import { User } from "../models/user";
import { FormUser } from "../models/formUser";
import { Question } from "../models/question";
import { AnswerForm } from "../models/answer";

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

export const getAllForms: RequestHandler = async (req, res, next) => {
    const currentUserId = req.userId;
    const currentUser = await User.findByPk(currentUserId);
    const forms = await FormUser.findAll({where: {userId: currentUser?.id}})
    return res.json({forms})
}