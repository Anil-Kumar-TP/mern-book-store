import express from 'express';
import { MONGO_URL, PORT } from './config.js'
import mongoose from 'mongoose';


const app = express();

app.get('/', (req, res) => {
    res.status(234).send('welcome!')
})



mongoose.connect(MONGO_URL).then(() => {
    console.log('connected to DB');
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`)
    });
}).catch((error) => {
    console.log('cannot connect to DB')
});