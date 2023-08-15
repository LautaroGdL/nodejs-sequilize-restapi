import { Router } from "express";
import { createProject, getProject } from "../controllers/projects.controller.js";
const router = Router()

router.get('/project', getProject)
router.post('/project', createProject)
router.put('/project/:id')
router.delete('/project/:id')
router.get('/project/:id')

export default router 