import express from 'express';
//import { authenticateAdmin } from '../middleware/authMiddleware';

const router = express.Router();

//router.post('/login', authenticateAdmin);

router.post('/login', (req, res) => {
    res.send('Login route');
});

export default router;
