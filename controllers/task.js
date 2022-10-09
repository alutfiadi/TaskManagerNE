const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper (async (req, res) =>{
    // res.send('all items')
    const tasks = await Task.find({})
    res.status(200).json({tasks})


})

const createTask = asyncWrapper (async (req, res) =>{
    // res.json(req.body)
    const task = await Task.create(req.body)
    res.status(201).json({task})

})

const getTask = asyncWrapper (async (req, res, next) =>{
    // res.json({id:req.params.id})

    const {id:taskID} = req.params
    const task = await Task.findOne({ _id:taskID })
    if(!task){
        return next(createCustomError(`No Task with id : ${taskID}`, 404))
        // return res.status(404).json({msg:`No Task with id : ${taskID}`})
    }
    res.status(200).json({task})

})

const updateTask = asyncWrapper (async (req, res) =>{
    // res.send('update Task')
    const {id:TaskID} = req.params
    const task = await Task.findOneAndUpdate({ _id:TaskID }, req.body, {
        new:true,
        runValidators:true
    })

    if(!task){
        return next(createCustomeError(`No Task with id : ${taskID}`, 404))
        // return res.status(404).json({msg:`No Task with id : ${taskID}`})
    }
    res.status(200).json({task})
    // res.status(200).json({task:null, msg:`Success`})

})

const deleteTask = asyncWrapper (async (req, res) =>{
    // res.send('delete Task')
    const {id:TaskID} = req.params
    const task = await Task.findOneAndDelete({_id:TaskID})
    if(!task){
        return res.status(404).json({msg:`No Task with id : ${taskID}`})
    }
    res.status(200).json({task})
    // res.status(200).json({task:null, msg:`Success`})

})


module.exports = {
    getAllTasks,  
    createTask,
    getTask,
    updateTask,
    deleteTask
}