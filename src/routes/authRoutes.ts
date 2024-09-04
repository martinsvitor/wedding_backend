import { Router } from 'express';
import { loginGuest } from '@/controllers/authController';
import { authenticateJWT } from '@/middlewares/authMiddleware';

const router = Router();

router.post('/login', loginGuest);
router.use(authenticateJWT);
// EXAMPLE OF PROTECTED ROUTES
// router.get('/authenticated', authenticateJWT, (req, res) => {
//   if (req.guest) {
//     res
//       .status(200)
//       .json({ message: 'this is a protected route', guest: req.guest });
//   }
// });

export default router;
