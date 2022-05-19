import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

dotenv.config();

const port = Number(process.env.PORT);

const buildPath = path.join(__dirname, '../../frontend/build');

const serverApp = express();

serverApp.use('/', express.static(buildPath));

serverApp.listen(port);