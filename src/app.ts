import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
