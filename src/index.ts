import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/users.route';
import eventRoutes from './routes/events.route';
import requestRoutes from './routes/requests.route';
import { initialize } from './config/db.config';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: ".env" });

const app = express();
app.use(express.json({ limit: '1000mb' }));
initialize();

app.use(cors());

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/requests', requestRoutes);

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});