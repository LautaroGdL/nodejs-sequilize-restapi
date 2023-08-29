import {Router} from 'express';
import { createTasks, getTasks } from '../controllers/task.controller.js';
const router = Router();

router.get('/task', getTasks)
router.get('/task/:id')
router.post('/task', createTasks)
router.put('/task/:id')
router.delete('/task/:id')

export default router;