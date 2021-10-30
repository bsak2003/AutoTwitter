import { Router } from 'express';


// User-route
const hello = Router();
hello.get('/', (req, res) => { res.end('Hello World!'); });


// Export the base-router
const baseRouter = Router();
baseRouter.use('/hello', hello);
export default baseRouter;
