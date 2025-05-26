import express from 'express'
import { createEvent, getEventsByUsername, updateEvent, deleteEvent, getEventsByFilters } from '../services/event.service'

const router = express.Router();

router.post('/', async (req,res) => {
    try {
        const event = await createEvent(req.body);
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create event'})
    }
})

router.get('/', async (req,res) => {

    try {
        const events = await getEventsByUsername();
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch events'})
    }

})


router.put('/:id', async (req,res) => {
    try {
        const event = await updateEvent(Number(req.params.id), req.body);
        res.json(event);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update events'})
    }
})


router.delete('/:id', async (req,res) => {
    try {
        await deleteEvent(Number(req.params.id))
        res.json({ message: 'Event deleted'})
    } catch (err) {

        res.status(500).json({ error: 'Failed to delete events'})

    }
})


router.get('/filter', async (req, res) => {
    const { username, type } = req.query;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        const events = await getEventsByFilters(username.toString(), type?.toString());
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch filtered events' });
    }
});


export default router;