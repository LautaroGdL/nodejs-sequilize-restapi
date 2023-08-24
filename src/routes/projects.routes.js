import { Router } from "express";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "../controllers/projects.controller.js";
const router = Router()

router.get('/project', getProjects)
router.get('/project/:id', getProject)
router.post('/project', createProject)
router.put('/project/:id', updateProject)
router.delete('/project/:id', deleteProject)

export default router 