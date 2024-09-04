import { Router } from 'express';
import { loginGuest } from '@/controllers/authController';
import { verifyToken } from '@/middlewares/authMiddleware';

const router = Router();

router.post('/login', loginGuest);

// EXAMPLE OF PROTECTED ROUTES
router.get('/authenticated', verifyToken, (req, res)=>{
    res.status(200).json({message: 'this is a protected route', guest: req.guest})
})

export default router;
