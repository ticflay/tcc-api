import { Router } from "express";

import {
    createAnswers,
    getAnswers
} from '../controllers/answer';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/:formId',authMiddleware, getAnswers);
router.post('/',authMiddleware, createAnswers);

export default router;