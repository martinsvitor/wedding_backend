import { Request, Response } from 'express';
import { authenticateGuest } from '@/services/authService';
import { useInvitationService } from '@/services/invitationService';

export const loginGuest = async (req: Request, res: Response) => {
  const { updateInivitationOnLogin } = useInvitationService();
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const result = await authenticateGuest(name);

    if (result) {
      const { guest, token } = result;

      if (guest.invitationId && guest.id) {
        await updateInivitationOnLogin(guest.invitationId, guest.id);
      }

      return res.status(200).json({
        message: 'Login successful',
        token,
        guest,
      });
    } else {
      return res.status(401).json({ message: 'Invalid name' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error ocurred' });
  }
};
