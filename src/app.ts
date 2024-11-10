import express from 'express';
import authRouthes from './routes/authRoutes';
import guestRoutes from './routes/guestRoutes';
import basicRoutes from '@/routes/basicRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/', basicRoutes);
app.use('/api/auth', authRouthes);
app.use('/api/guests', guestRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
