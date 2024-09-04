import express from 'express';
import authRouthes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRouthes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
