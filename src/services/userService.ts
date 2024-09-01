// I will get users from DB in this file
import prisma from "../prisma/client";

export interface User {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

// Function to get all users
export const getAllUsers = async (): Promise<User[]> => {
	// In a real application, you'd fetch from the database
	return prisma.user.findMany();
};

// Function to add a new user
export const addUser = async (userData: {
	name: string;
	email: string;
}): Promise<User> => {
	return prisma.user.create({
		data: userData,
	});
};

export const getUserById = async (id: number): Promise<User | null> => {
	return prisma.user.findUnique({
		where: { id },
	});
};

export const updateUser = async (
	id: number,
	userData: { name?: string; email?: string }
): Promise<User> => {
	return prisma.user.update({
		where: { id },
		data: userData,
	});
};

export const deleteUser = async (id: number): Promise<User> => {
	return prisma.user.delete({
		where: { id },
	});
};
