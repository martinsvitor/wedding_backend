import { Request, Response, NextFunction } from 'express';
import { useGuestServices } from '@/services/guestService';
import { useTypeGuard } from '@/utils/requestValidation';
import { Guest } from '@/types/guest';

const {
  fetchAllGuests,
  fetchGuestById,
  fetchAttendingGuests,
  fetchNotAttendingGuests,
  updateGuestInfo,
} = useGuestServices();
const { isValidUpdateGuestRequest } = useTypeGuard();

// Handler to get all users
export const getAllGuests = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const guests: Guest[] = await fetchAllGuests();
    res.json(guests);
  } catch (error) {
    next(error);
  }
};

export const getOneGuest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const guestId = parseInt(req.params.id, 10);
    const guest: Guest | null = await fetchGuestById(guestId);
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found.' });
    }
    res.json(guest);
  } catch (error) {
    next(error);
  }
};

export const updateSingleGuest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!isValidUpdateGuestRequest(req.body)) {
      res.status(400).json({ error: 'Invalid request data' });
    }
    const guestId = parseInt(req.params.id, 10);
    const { willAttend, music, dietaryRestrictions } = req.body;
    const updatedGuest: Guest = await updateGuestInfo(guestId, {
      willAttend,
      music,
      dietaryRestrictions,
    });
    res.json(updatedGuest);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({
        message: 'Email already exists',
      });
    }
    next(error);
  }
};
