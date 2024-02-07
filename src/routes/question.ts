import { Router } from "express";

import {
    getQuestionByCategory,
    getAllQuestions
} from '../controllers/question';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/:categoryId', authMiddleware, getQuestionByCategory);
router.get('/', authMiddleware, getAllQuestions);

export default router;