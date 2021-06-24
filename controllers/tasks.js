const getAllTasks = (req, res) => {
    res.send("ALL TASKS")
}

const createTask = (req, res) => {
    res.send("Create new task")
}

const getTask = (req, res) => {
    res.send("Get single task")
}

const updateTask = (req, res) => {
    res.send("Update task")
}

const deleteTask = (req, res) => {
    res.send("Delete TASK")
}

module.exports = {
    getAllTasks, createTask,
    getTask,
    updateTask,
    deleteTask
}