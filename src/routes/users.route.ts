import express from 'express';
import { signup, login, changePassword } from '../services/user.service';

const router = express.Router();

router.post('/signup', async(req,res) => {
    try {
        const user = await signup(req.body);
        res.status(201).json({ message: "User created", user});

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.post('/login', async (req,res) => {
    try {
        const { username, password} = req.body;
        const user = await login(username, password);
        res.status(200).json({ message: "Login success", user});
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
})

router.post('/change', async (req,res) => {
    try {
        const { username, newPassword} = req.body;
        const updatedUser = await changePassword(username, newPassword);
        res.status(200).json({ message: "Password changed", user: updatedUser });

    } catch (err) {
        res.status(400).json({ error: err.message });

    }
})

export default router;