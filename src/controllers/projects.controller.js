import {Project} from '../models/Project.js'

export const getProject = async (req, res) => {
try {
    //throw new Error ('query failed')
    const projects = await Project.findAll()
    console.log(projects)
    res.json(projects)
} 
catch (error) {
    return res.status(500).json({message: error.message})
}
};
export const createProject = async (req, res) => {
    const {name, priority, description} = req.body
try{    
    //throw new Error ('query failed')
    const newProject = await Project.create({
        name,
        description,
        priority
    });
    res.json(newProject)
}
catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, priority, description} = req.body
        
        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description

        console.log(project)
        
        res.send('updating')
    } catch (error) {
        return res.status(500).json({message: error.message})

    }
}

export const deleteProject = async(req, res) => {
    try {
        //throw new Error ('query failed')
        const {id} = req.params;
        await Project.destroy({
        where: {
            id,
        },
    });
    res.sendStatus(204)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
