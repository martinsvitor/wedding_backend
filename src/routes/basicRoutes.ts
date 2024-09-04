import { Router, Request, Response } from 'express';
import { loginGuest } from '@/controllers/authController';
import { authenticateJWT } from '@/middlewares/authMiddleware';

const router = Router();

router.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        message: 'Is this even working?'
    })
})
export default router;
