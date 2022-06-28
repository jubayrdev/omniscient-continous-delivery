import dotenv from "dotenv";
dotenv.config();


import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

prisma.user.count().then(console.log);

import express, { Express, Request, Response } from "express";
import rootRoutes from './src/routes';

const app: Express = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html');
})

app.use('/api', rootRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Backend listening on port ${process.env.PORT}`)
})