import { Router } from "express";
import { createProject, deleteProject, getProject, updateProject } from "../controllers/projects.controller.js";
const router = Router()

router.get('/project', getProject)
router.post('/project', createProject)
router.put('/project/:id', updateProject)
router.delete('/project/:id', deleteProject)
router.get('/project/:id')

export default router 