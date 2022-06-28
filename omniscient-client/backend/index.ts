import dotenv from "dotenv";
dotenv.config();

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