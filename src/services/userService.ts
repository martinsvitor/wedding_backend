// I will get users from DB in this file
import prisma from "../prisma/client";

export interface Guest {
	id: number;
	name: string;
	willAttend: Boolean | null;
	dietaryRestrictions: String[] | undefined;
	music: String[] | undefined;
}

export interface Invitation {
	id: number;
	invitedGuests: Guest[];
	confirmedGuest: Guest[];
	updatedAt?: Date;
	firstLoginAt?: Date;
}

// Function to get all users
export const getAllGuests = async (): Promise<Guest[]> => {
	// In a real application, you'd fetch from the database
	return prisma.guest.findMany();
};

export const getGuestById = async (id: number): Promise<Guest | null> => {
	return prisma.guest.findUnique({
		where: { id },
	});
};

export const updateGuest = async (
	id: number,
	userData: { name?: string; email?: string }
): Promise<Guest> => {
	return prisma.guest.update({
		where: { id },
		data: userData,
	});
};
