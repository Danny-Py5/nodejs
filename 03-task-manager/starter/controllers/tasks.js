const tasksCollection = require('../models/tasks.js')

// const {getFromFile, saveTofile} = require('./prazzy/fileManagement.js')

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getAllTasks = (req, res) => {
    res.status(200).send('All Tasks');
};


/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const createTask = async (req, res) => {
    // console.log(req.method);
    // console.log(req.body);
    const createdTask = await tasksCollection.create(req.body);
    res.status(201).json(createdTask);
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('get single Tasks');
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const updateTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('update Tasks');
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const deleteTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('Delete Task');
};


module.exports = {
    getAllTasks,
    getTask, 
    updateTask, 
    createTask, 
    deleteTask
};
