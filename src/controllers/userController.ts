import { Request, Response, NextFunction } from 'express';
import { getAllUsers, addUser } from '../services/userService';

// Handler to get all users
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Handler to create a new user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const user = await addUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
