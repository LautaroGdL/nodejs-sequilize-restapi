import { Task } from '../models/Task.js';

export const getTasks =  async (req, res) => {
    try {
        const task = await Task.findAll()
        res.json(task)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}; 

export const createTasks =  async (req, res) => {
    try {
        const {name, description, projectId} = req.body
        
        const newTask = await Task.create({
            name,
            done,
            projectId
        })

        res.json(newTask);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}; 

export const updateTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findOne({
            where: { id },
        });
        task.set(res.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
};

export const deleteTasks = async (req, res) => {

};