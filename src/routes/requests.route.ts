import express from 'express'
import { getRequests, createRequest, deleteRequest } from '../services/request.service'

const router = express.Router();


router.post('/', async (req,res) => {
    try {
        const request = await createRequest(req.body);
        res.json(request);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create request'})
    }
})


router.get('/', async (req,res) => {

    try {
        const requests = await getRequests();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch requests'})
    }

})


router.delete('/:id', async (req,res) => {
    try {
        await deleteRequest(Number(req.params.id))
        res.json({ message: 'Request deleted'})
    } catch (err) {

        res.status(500).json({ error: 'Failed to delete request'})

    }
})


export default router;