import { postData } from '@/controllers/userData.controller';
import express, { Router } from 'express';

const router: Router = express.Router();

router.post('/', postData);

export default router;
