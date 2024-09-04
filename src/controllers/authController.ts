import { Request, Response } from 'express';
import { findGuestByName } from '@/services/authService';
import { useInvitationService } from '@/services/invitationService';

export const loginGuest = async (req: Request, res: Response) => {
  const { updateInivitationOnLogin } = useInvitationService();
  if (!req.body || !req.body.name) {
    return res.status(400).json({
      message: 'Bad request. no name received',
    });
  }

  const { name } = req.body;
  const response = await findGuestByName(name);

  try {
    if (!response) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    await updateInivitationOnLogin(
      response.guest.invitationId,
      response.guest.id,
    );

    return res.status(200).json({
      message: 'Login successful',
      guest: response.guest,
      token: response.token,
    });
  } catch (error) {
    return res.status(500).json({ message: 'An error ocurred' });
  }
};
