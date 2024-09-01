import { Router } from "express";
import {
	getUsers,
	createUser,
	getUser,
	modifyUser,
	removeUser,
} from "../controllers/userController";

const router = Router();

// GET /api/users
router.get("/", getUsers);

// GET /api/users/:id
router.get("/:id", getUser);

// POST /api/users
router.post("/", createUser);

// PUT /api/users/:id
router.put("/:id", modifyUser);

// DELETE /api/users/:id
router.delete("/:id", removeUser);

export default router;
