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
        const {name, done} = req.body
        
        const newTask = await Task.create({
            name,
            done
        })

        res.json(newTask);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}; 