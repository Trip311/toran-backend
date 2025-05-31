import express, { Request, Response } from 'express';
import { signup, login, changePassword, fetchUsers } from '../services/user.service';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
    try {
        const user = await signup(req.body);
        res.status(201).json({ message: "User created", user });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await login(username, password);
        res.status(200).json({ message: "Login success", user });
    } catch (err: any) {
        res.status(401).json({ error: err.message });
    }
});

router.post('/change', async (req: Request, res: Response) => {
    try {
        const { username, newPassword } = req.body;
        const updatedUser = await changePassword(username, newPassword);
        res.status(200).json({ message: "Password changed", user: updatedUser });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/users', async (_req: Request, res: Response) => {
    try {
        const users = await fetchUsers();
        res.status(200).json({ users });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;