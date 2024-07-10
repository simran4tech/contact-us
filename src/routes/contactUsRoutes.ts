/*import express from 'express';
import { contactUsModel } from '../models/contactUsModel';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/contact-us', authenticateAdmin, (req, res) => {
    const { name, email, mobile, subject, description } = req.body;
    const newcontactUs = new contactUsModel(name, email, mobile, subject, description);  
    
    
    res.json({ message: 'Your ticket summited successfully' });
});

export default router;
*/
import express from 'express';
import ContactUs from '../models/contactUsModel';
import { authenticateAdmin } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/contact-us', authenticateAdmin, async (req, res) => {
    const { name, email, mobile, subject, description } = req.body;

    try {
        const newContactUs = new ContactUs({ name, email, mobile, subject, description });
        await newContactUs.save();
        res.json({ message: 'your ticket submitted successfully' });
    } catch (error) {
        console.error('Error contacting us:', error);
        res.status(500).json({ error: 'Failed to submit ticket' });
    }
});

router.delete('/contact-us/:email', authenticateAdmin, async (req, res) => {
    const { email } = req.params;

    try {
        await ContactUs.findByIdAndDelete(email);
        res.json({ message: 'your ticket deleted successfully' });
    } catch (error) {
        console.error('Error deleting ticket:', error);
        res.status(500).json({ error: 'Failed to delete ticket' });
    }
});

export default router;
