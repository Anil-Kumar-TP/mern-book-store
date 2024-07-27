import express from 'express';
import { MONGO_URL, PORT } from './config.js'
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

app.use(express.json());


app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders:['Content-Type'],
    })
);

app.use('/books', booksRoute);

mongoose.connect(MONGO_URL).then(() => {
    console.log('connected to DB');
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`)
    });
}).catch((error) => {
    console.log('cannot connect to DB')
});