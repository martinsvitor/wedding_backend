import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import { Guest } from '@/types/guest';

const JWT_SECRET = process.env.JWT_SECRET || 'vitaliswedding';

export const verifyToken = (req: Request, res:Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(403).json({message: 'No Token provided'});
    }

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.status(401).json({message: 'Failed to authenticate token'})
        }

        req.guest = decoded as Guest;
        next();
    })
}