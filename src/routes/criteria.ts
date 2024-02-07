import { Router } from "express";

import {
    getCriteria
} from '../controllers/criteria';
import { authMiddleware } from "../controllers/authentication";

const router = Router();

router.get('/', authMiddleware, getCriteria);

export default router;