import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/router';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', routes)

export default app;
