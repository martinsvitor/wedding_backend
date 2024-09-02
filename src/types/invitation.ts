import { Guest } from './guest';

export interface Invitation {
  id: number;
  invitedGuests: Guest[];
  confirmedGuests: Guest[];
  updatedAt?: Date;
  firstLoginAt?: Date;
}
