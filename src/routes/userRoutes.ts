import { Router } from 'express';
import {
  getAllGuests,
  getOneGuest,
  updateSingleGuest,
} from '@/controllers/guestController';

const router = Router();

// GET /api/users
router.get('/', getAllGuests);

// GET /api/users/:id
router.get('/:id', getOneGuest);

// POST /api/users

// PUT /api/users/:id
router.put('/:id', updateSingleGuest);

// DELETE /api/users/:id

export default router;
