import {Router} from 'express';
import { getTasks } from '../controllers/task.controller';
const router = Router();

router.get('/task', getTasks)
router.get('/task/:id')
router.post('/task')
router.put('/task/:id')
router.delete('/task/:id')

export default router;