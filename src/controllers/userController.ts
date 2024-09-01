import { Request, Response, NextFunction } from "express";
import {
	getAllGuests,
	getGuestById,
	updateGuest,
	Guest,
  Invitation
} from "../services/userService";

// Handler to get all users
export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const users: Guest[] = await getAllGuests();
		res.json(users);
	} catch (error) {
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
		const user: Guest | null = await getGuestById(userId);
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
		const updatedUser: Guest = await updateGuest(userId, { name, email });
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
