import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";

import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();


app.use(express.json({ limit: "30mb", extended: true }));
//app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
//app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)
//mongodb.com/cloud/atlas

app.get('/', (req, res) => {
    res.send('Hello to memories API');
})

const PORT = process.env.PORT || 8080
const URL = process.env.CONNECTION_URL

mongoose.connect(URL, { useNewUrlParser: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
