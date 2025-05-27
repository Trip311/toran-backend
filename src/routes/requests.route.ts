import express from 'express'
import { getRequests, createRequest } from '../services/request.service'

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


export default router;