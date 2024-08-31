// I will get users from DB in this file

import { todo } from "node:test";

interface User {
	id: number;
	name: string;
	email: string;
}

// Testing purposes only, local storing data
// Replace with actual database
let users: User[] = [{ id: 1, name: "John Doe", email: "john@example.com" }];

// Function to get all users
export const getAllUsers = async (): Promise<User[]> => {
	// In a real application, you'd fetch from the database
	return users;
};

// Function to add a new user
export const addUser = async (userData: Omit<User, "id">): Promise<User> => {
	const newUser: User = {
		id: users.length + 1,
		...userData,
	};
	users.push(newUser);
	return newUser;
};
