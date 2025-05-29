import express from 'express'
import { createEvent, getEventsByUsername, updateEvent, deleteEvent, deleteEventsByGroup, updateEventsByGroup } from '../services/event.service'
import { EventRepo } from '../repository/event.repository';

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



router.delete('/group/:groupId', async (req, res) => {
    try {
        await deleteEventsByGroup(req.params.groupId);
        res.json({ message: 'Group events deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete group events' });
    }
});

router.put('/group/:groupId', async (req, res) => {
    try {
        const updated = await updateEventsByGroup(req.params.groupId, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update group events' });
    }
});






export default router;