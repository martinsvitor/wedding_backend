import { JwtPayload } from 'jsonwebtoken';

export interface GuestResponse {
  id: number;
  name: string;
  willAttend: boolean | null;
  invitationId: number;
  dietaryRestrictions: String[] | null;
  songs: String[] | null;
  confirmedInvitationId: number | null;
}

declare global {
  namespace Express {
    interface Request {
      guest?: GuestResponse;
      token?: string | JwtPayload;
    }
  }
}
