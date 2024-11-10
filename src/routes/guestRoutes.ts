import { Router } from 'express';
import {
  getAllGuests,
  getOneGuest,
  getAllConfirmedGuests,
  getAllNonAttendingGuests,
  updateSingleGuest,
} from '@/controllers/guestController';

const router = Router();

// GET /api/users
router.get('/', getAllGuests);

// GET /api/users/attending
router.get('/attending', getAllConfirmedGuests);

// GET /api/users/not-attending
router.get('/not-attending', getAllNonAttendingGuests);

// GET /api/users/:id
router.get('/:id', getOneGuest);


// POST /api/users

// PUT /api/users/:id
router.put('/:id', updateSingleGuest);

// DELETE /api/users/:id

export default router;
