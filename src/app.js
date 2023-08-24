import express from "express";
import projectsRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express();

//middleware
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;