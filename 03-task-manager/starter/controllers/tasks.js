const tasksCollection = require('../models/tasks.js');

// const {getFromFile, saveTofile} = require('./prazzy/fileManagement.js')

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getAllTasks = async (req, res) => {
    try{
        const tasks = await tasksCollection.find({});
        res.status(200).json({tasks});
        // res.status(200).send('All Tasks');
    } catch (error) {
        res.status(500).json({msg: error});
    };
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const createTask = async (req, res) => {
    // console.log(req.method);
    // console.log(req.body);
    try{
        // const createdTask = await tasksCollection.create(req.body);
        const task = await tasksCollection.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg: error});
    };
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const getTask = async (req, res) => {
    const {id} = req.params;

    try{
        // const singleTask = await tasksCollection.findOne({_id: id});
        const task = await tasksCollection.findOne({_id: id});

        if (!task){
            return res.status(404).json({msg: `Cannot find task with the id ${id}`});
        };
        res.status(200).json({task});
    } catch(error) {
        res.status(500).json({msg: error});
    };
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const updateTask =  async (req, res) => {
    const {id} = req.params;
    try{
        // const updatedTask = await tasksCollection.findOneAndUpdate({_id: id}, {name: taskName}, {new: true, runValidators: true});
        const task = await tasksCollection.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true});

        if (!task){
            return res.status(404).send({msg: `No task with the id of ${id}`});
        }; 
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    };
    // res.status(200).send('update Tasks');
};

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const deleteTask = async (req, res) => {
    const {id} = req.params;
    
    try{
        // const deletedTask = await tasksCollection.findOneAndDelete({_id: id});
        const task = await tasksCollection.findOneAndDelete({_id: id});
        if (!task){
            return res.status(404).send({msg: `No task with id : ${id}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    };

    // res.status(200).send('Delete Task');
};


module.exports = {
    getAllTasks,
    getTask, 
    updateTask, 
    createTask, 
    deleteTask
};
