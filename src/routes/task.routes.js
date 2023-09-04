import {Router} from 'express';
import { createTasks, deleteTasks, getTasks, getTask,updateTasks } from '../controllers/task.controller.js';
const router = Router();

router.get('/task', getTasks)
router.get('/task/:id', getTask)
router.post('/task', createTasks)
router.put('/task/:id', updateTasks)
router.delete('/task/:id', deleteTasks)

export default router;