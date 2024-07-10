import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/contactUs.user'; 

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,   //why error??
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});

export default mongoose;
