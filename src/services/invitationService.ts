import { Invitation } from '@/types/invitation';
import prisma from '@/lib/prisma';
import { InvitedGuestsResponse } from '@/types/apiResponses';

export function useInvitationService() {
  async function fetchInvitedGuests(): Promise<InvitedGuestsResponse[]> {
    return prisma.invitation.findMany({
      select: {
        invitedGuests: true,
      },
    });
  }

  async function fetchConfirmedGuests(): Promise<any[]> {
    return prisma.invitation.findMany({
      select: {
        confirmedGuests: true,
      },
    });
  }

  async function updateInivitationOnLogin(
    invitationId: number,
    guestId: number,
  ): Promise<Invitation> {
    return prisma.invitation.update({
      where: {
        id: invitationId,
        invitedGuests: {
          some: { id: guestId },
        },
      },
      data: {
        firstLoginAt: new Date(),
      },
      include: {
        invitedGuests: true,
        confirmedGuests: true,
      },
    });
  }

  return {
    fetchInvitedGuests,
    fetchConfirmedGuests,
    updateInivitationOnLogin,
  };
}
