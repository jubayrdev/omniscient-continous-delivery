import { Router, Request, Response } from "express";


const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('Message received');
    res.json({ message: 'Hello from backend' })
});


export default router