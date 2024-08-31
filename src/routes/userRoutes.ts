import {Router} from 'express'
import {getUsers, createUser} from '../controllers/userController';

const router = Router();

// GET /api/users
router.get('/', getUsers);

// POST /api/users
router.post('/', createUser);

export default router;