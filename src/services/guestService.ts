// I will get users from DB in this file
import prisma from '@/lib/prisma';
import {
  SongsResponse,
  DietaryRestrictionsResponse,
} from '@/types/apiResponses';
import { Guest } from '@/types/guest';

export function useGuestServices() {
  // Function to find all users
  async function fetchAllGuests(): Promise<Guest[]> {
    return prisma.guest.findMany();
  }

  // Find single guest
  async function fetchGuestById(id: number): Promise<Guest | null> {
    return prisma.guest.findUnique({
      where: { id },
    });
  }

  // Find guests who confirmed presence
  async function fetchAttendingGuests(): Promise<Guest[]> {
    return prisma.guest.findMany({
      where: {
        willAttend: true,
      },
    });
  }

  // Find guests who confirmed abscence
  async function fetchNotAttendingGuests(): Promise<Guest[]> {
    return prisma.guest.findMany({
      where: {
        willAttend: false,
      },
    });
  }

  // Fetch all guests with the songs they entered
  async function fetchPreferedSongs(): Promise<SongsResponse[]> {
    return prisma.guest.findMany({
      select: {
        name: true,
        songs: true,
      },
    });
  }

  // Fetch all dietary reistrictions
  async function fetchDietaryRestrictions(): Promise<
    DietaryRestrictionsResponse[]
  > {
    return prisma.guest.findMany({
      select: {
        dietaryRestrictions: true,
      },
    });
  }

  // Find and update Guest info
  async function updateGuestInfo(
    id: number,
    guestData: {
      willAttend: boolean;
      music?: string[];
      dietaryRestrictions?: string[];
    },
  ): Promise<Guest> {
    return prisma.guest.update({
      where: { id },
      data: guestData,
    });
  }

  return {
    fetchAllGuests,
    fetchGuestById,
    fetchAttendingGuests,
    fetchNotAttendingGuests,
    updateGuestInfo,
  };
}
