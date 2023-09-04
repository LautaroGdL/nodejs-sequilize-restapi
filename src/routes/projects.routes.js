import { Router } from "express";
import { createProject, deleteProject, getProject, getProjects, getProjectTask, updateProject } from "../controllers/projects.controller.js";
const router = Router()

router.get('/project', getProjects)
router.get('/project/:id', getProject)
router.get('/project/:id/task', getProjectTask)
router.post('/project', createProject)
router.put('/project/:id', updateProject)
router.delete('/project/:id', deleteProject)

export default router 