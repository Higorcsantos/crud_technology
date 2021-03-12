import express from 'express';
import { router } from './routes';
import path from 'path';
import './database'

const app = express();
app.use(express.json());
app.use(router);
app.use("/uploads",express.static(path.join(__dirname, "..","uploads")))

app.listen(3333, () => console.log("Server is Running"))