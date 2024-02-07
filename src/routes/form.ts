import { Router } from "express";

import {
    getCurrentForm,
    finishForm,
    getAllForms,
    createForm
} from '../controllers/formUser';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/', authMiddleware, getCurrentForm);
router.get('/all', authMiddleware, getAllForms);
router.patch('/', authMiddleware, finishForm);
router.post('/', authMiddleware, createForm);

export default router;