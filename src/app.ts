import express from 'express';
import authRouthes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import basicRoutes from '@/routes/basicRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/', basicRoutes);
app.use('/api/auth', authRouthes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
