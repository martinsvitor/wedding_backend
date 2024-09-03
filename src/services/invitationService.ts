import prisma from '@/lib/prisma';
import {
  InvitedGuestsResponse,
  ConfirmedGuestsResponse,
} from '@/types/apiResponses';

export const findInvitedGuests = async (): Promise<InvitedGuestsResponse[]> => {
  return prisma.invitation.findMany({
    select: {
      invitedGuests: true,
    },
  });
};

export const findConfirmedGuests = async (): Promise<
  ConfirmedGuestsResponse[]
> => {
  return prisma.invitation.findMany({
    select: {
      confirmedGuests: true,
    },
  });
};
