import express from 'express';
import bodyParser from 'body-parser';
import './database';
import authRoutes from './routes/authRoutes';
import contactUsRoutes from './routes/contactUsRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', contactUsRoutes); 

app.get('/', (req, res) => {
    res.send('Welcome to the Contact Us');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 