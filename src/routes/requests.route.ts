import express, { Request, Response } from 'express';
import { getRequests, createRequest, deleteRequest, updateRequest, fetchEmptyRequests, fetchRequestsByStatus, fetchRequestsByUsername, fetchRequestsByUsernameAndStatus } from '../services/request.service';

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


router.get('/status/:status', async (req: Request<{ status: string }>, res: Response) => {
    try {
        const requests = await fetchRequestsByStatus(req.params.status);
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch requests by status' });
    }
});

router.get('/user/:username', async (req: Request<{ username: string }>, res: Response) => {
    try {
        const requests = await fetchRequestsByUsername(req.params.username);
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch requests by username' });
    }
});

router.get('/user/:username/status/:status', async (req: Request<{ username: string; status: string }>, res: Response) => {
    try {
        const requests = await fetchRequestsByUsernameAndStatus(req.params.username, req.params.status);
        res.json(requests);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch requests by username and status' });
    }
});


export default router;