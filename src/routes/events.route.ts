
import express, { Request, Response } from 'express';
import {
    createEvent,
    getEventsByUsername,
    updateEvent,
    deleteEvent,
    deleteEventsByGroup,
    updateEventsByGroup
} from '../services/event.service';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const event = await createEvent(req.body);
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});

router.get('/', async (_req: Request, res: Response) => {
    try {
        const events = await getEventsByUsername();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const event = await updateEvent(Number(req.params.id), req.body);
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update events' });
    }
});

router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        await deleteEvent(Number(req.params.id));
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete events' });
    }
});

router.delete('/group/:groupId', async (req: Request<{ groupId: string }>, res: Response) => {
    try {
        await deleteEventsByGroup(req.params.groupId);
        res.json({ message: 'Group events deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete group events' });
    }
});

router.put('/group/:groupId', async (req: Request<{ groupId: string }>, res: Response) => {
    try {
        const updated = await updateEventsByGroup(req.params.groupId, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update group events' });
    }
});

export default router;