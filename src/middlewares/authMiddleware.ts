import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { GuestResponse } from '@/types/express';

const JWT_SECRET = process.env.JWT_SECRET || 'vitaliswedding';

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.path === '/login') {
    return next();
  }

  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      message: 'Access denied. No token provided',
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as GuestResponse;
    req.token = token;
    req.guest = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token.',
    });
  }
};
