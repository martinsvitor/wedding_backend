import { Request, Response, NextFunction } from "express";
import {
	getAllUsers,
	addUser,
	getUserById,
	updateUser,
	deleteUser,
	User,
} from "../services/userService";

// Handler to get all users
export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users: User[] = await getAllUsers();
		res.json(users);
	} catch (error) {
		next(error);
	}
};

// Handler to create a new user
export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { name, email } = req.body;
		if (!name || !email) {
			return res.status(400).json({
				message: "Name and email are required.",
			});
		}
		const user: User = await addUser({ name, email });
		res.status(201).json(user);
	} catch (error: any) {
		if (error.code === "P2002") {
			return res.send(409).json({
				message: "Email already exists.",
			});
		}
		next(error);
	}
};

export const getUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const userId = parseInt(req.params.id, 10);
		const user: User | null = await getUserById(userId);
		if (!user) {
			return res.status(404).json({ message: "User not found." });
		}
		res.json(user);
	} catch (error) {
		next(error);
	}
};

export const modifyUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const userId = parseInt(req.params.id, 10);
		const { name, email } = req.body;
		const updatedUser: User = await updateUser(userId, { name, email });
		res.json(updatedUser);
	} catch (error: any) {
		if (error.code === "P2002") {
			return res.status(409).json({
				message: "Email already exists",
			});
		}
		next(error);
	}
};

export const removeUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const userId = parseInt(req.params.id, 10);
		const deletedUser: User = await deleteUser(userId);
		res.json(deletedUser);
	} catch (error) {
		next(error);
	}
};
