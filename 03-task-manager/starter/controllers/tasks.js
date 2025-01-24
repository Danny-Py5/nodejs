const tasksCollection = require('../models/tasks.js');
const asyncWrapper = require('../milddleware/asyncWrapper.js');
const  {
    createCustomAPIError
} = require('../error/customError.js')

// const {getFromFile, saveTofile} = require('./prazzy/fileManagement.js')

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await tasksCollection.find({});
    res.status(200).json({tasks});
    // res.status(200).send('All Tasks');
});

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const createTask = asyncWrapper( async (req, res) => {
    // console.log(req.method);
    // console.log(req.body);
    // const createdTask = await tasksCollection.create(req.body);
    const task = await tasksCollection.create(req.body);
    res.status(201).json(task);
});

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getTask = asyncWrapper( async (req, res, next) => {
    const {id} = req.params;
    // const singleTask = await tasksCollection.findOne({_id: id});
    const task = await tasksCollection.findOne({_id: id});
    if (!task){
        const error = createCustomAPIError(`Cannot find task with the id ${id} ::[custom]::`, 404);
        return next(error);
        //return res.status(404).json({msg: `Cannot find task with the id ${id}`});
    };
    res.status(200).json({task});
});

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const updateTask = asyncWrapper( async (req, res) => {
    const {id} = req.params;
    // const updatedTask = await tasksCollection.findOneAndUpdate({_id: id}, {name: taskName}, {new: true, runValidators: true});
    const task = await tasksCollection.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true});

    if (!task){
        const error = createCustomAPIError(`Cannot find task with the id ${id} ::[custom]::`, 404);
        return next(error);
    }; 
    res.status(200).json({task});
});

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const deleteTask = asyncWrapper( async (req, res) => {
    const {id} = req.params;

    // const deletedTask = await tasksCollection.findOneAndDelete({_id: id});
    const task = await tasksCollection.findOneAndDelete({_id: id});
    if (!task){
        const error = createCustomAPIError(`Cannot find task with the id ${id} ::[custom]::`, 404);
        return next(error);
    }
    res.status(200).json({task});
});


module.exports = {
    getAllTasks,
    getTask, 
    updateTask, 
    createTask, 
    deleteTask
};
