import { Router } from "express";
import {
	getUsers,
	getUser,
	modifyUser,
} from "../controllers/userController";

const router = Router();

// GET /api/users
router.get("/", getUsers);

// GET /api/users/:id
router.get("/:id", getUser);

// POST /api/users

// PUT /api/users/:id
router.put("/:id", modifyUser);

// DELETE /api/users/:id

export default router;
