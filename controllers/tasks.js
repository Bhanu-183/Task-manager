const getAllTasks = (req, res) => {
    res.send("ALL TASKS")
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send(req.params)
}

const updateTask = (req, res) => {
    res.send(req.params)
}

const deleteTask = (req, res) => {
    res.send(req.params)
}

module.exports = {
    getAllTasks, createTask,
    getTask,
    updateTask,
    deleteTask
}