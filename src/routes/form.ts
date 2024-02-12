import { Router } from "express";

import {
    getCurrentForm,
    finishForm,
    getAllForms,
    createForm,
    deleteForm,
    getAllDeletedForms,
    restoreForm
} from '../controllers/formUser';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/', authMiddleware, getCurrentForm);
router.get('/all', authMiddleware, getAllForms);
router.patch('/', authMiddleware, finishForm);
router.post('/', authMiddleware, createForm);
router.delete('/:formId', authMiddleware,  deleteForm)
router.get('/alldeleted', authMiddleware, getAllDeletedForms);
router.patch('/restore', authMiddleware, restoreForm);

export default router;