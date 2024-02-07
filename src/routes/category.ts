import { Router } from "express";

import {
    getCategoryByCriteria,
    getCategories
} from '../controllers/category';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/:criteriaId',authMiddleware, getCategoryByCriteria);
router.get('/',authMiddleware, getCategories);


export default router;