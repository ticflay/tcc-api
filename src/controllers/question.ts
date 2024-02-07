import { RequestHandler } from "express";
import { Category } from "../models/category";
import { Question } from "../models/question";

export const getQuestionByCategory: RequestHandler = async (req, res, next) => {
    const {categoryId} = req.params;
    const category = await Category.findByPk(categoryId);
    if(category) {
        const questions = await Question.findAll({where: {categoryId: category.id} });
        if(questions) {
            return res.json({questions: questions})
        }else {
            return res.status(404).json({error: "Erro ao obter perguntas! Tente novamente."})
        }
    }else {
        return res.status(404).json({error: "Categoria inválida."})
    }
}

export const getAllQuestions: RequestHandler = async (req, res, next) => {
        const questions = await Question.findAll();
        if(questions) {
            return res.json({questions: questions})
        }else {
            return res.status(404).json({error: "Erro ao obter perguntas! Tente novamente."})
        }

}