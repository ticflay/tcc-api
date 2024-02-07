import { RequestHandler } from "express";
import { Criteria } from "../models/criteria";
import { Category } from "../models/category";

export const getCategoryByCriteria: RequestHandler = async (req, res, next) => {
    const {criteriaId} = req.params;
    const criteria = await Criteria.findByPk(criteriaId);
    if(criteria) {
        const categories = await Category.findAll({where: {criteriaId: criteria.id} });
        if(categories) {
            return res.json({categories: categories})
        }else {
            return res.status(404).json({error: "Erro ao obter categorias! Tente novamente."})
        }
    }else {
        return res.status(404).json({error: "Critério inválido."})
    }
}

export const getCategories: RequestHandler = async (req, res, next) => {
        const categories = await Category.findAll();
        if(categories) {
            return res.json({categories: categories})
        }else {
            return res.status(404).json({error: "Erro ao obter categorias! Tente novamente."})
        }
}