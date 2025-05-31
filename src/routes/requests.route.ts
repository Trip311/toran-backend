import express, { Request, Response } from 'express';
import { getRequests, createRequest, deleteRequest, updateRequest, fetchEmptyRequests } from '../services/request.service';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const request = await createRequest(req.body);
        res.json(request);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create request' });
    }
});

router.get('/', async (_req: Request, res: Response) => {
    try {
        const requests = await getRequests();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch requests' });
    }
});

router.get('/empty', async (_req: Request, res: Response) => {
    try {
        const requests = await fetchEmptyRequests();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch empty requests' });
    }
});


router.delete('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        await deleteRequest(Number(req.params.id));
        res.json({ message: 'Request deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete request' });
    }
});

router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const updated = await updateRequest(Number(req.params.id), req.body);
        if (!updated) {
            return res.status(404).json({ error: 'Request not found' });
        }
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update request' });
    }
});

export default router;