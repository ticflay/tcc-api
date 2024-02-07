import { RequestHandler } from "express";
import { Criteria } from "../models/criteria";

export const getCriteria: RequestHandler = async (req, res, next) => {
    const criteria = await Criteria.findAll();
    return res.json({criteria: criteria});
}