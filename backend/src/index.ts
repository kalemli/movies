import dotenv from 'dotenv';
dotenv.config({
  path: `.env${process.env.NODE_ENV === 'prod' ? '.prod' : ''}`,
});

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import serverRoutes from './routes/servers';
import { loadMoives } from './controllers/movies';

const app = express();
const PORT = process.env.PORT || '4000';

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(morgan('dev'));
app.use(serverRoutes);

// initial loading all movies
loadMoives();

app.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
