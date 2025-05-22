import express from 'express';
import userRoutes from './routes/users.route'
import EventRoutes from './routes/events.route'
import { initialize } from './config/db.config';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config({
    path: ".env"
})

const app = express();
app.use(express.json({ limit: '1000mb'}));
initialize();

app.use(cors());
app.use('/api/auth', userRoutes);
app.use('/api/events', EventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})