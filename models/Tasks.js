const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide task name'],
        trim: true,
        maxlength: [20, 'The task name cannot exceed 20 characters']
    }, completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', taskSchema)