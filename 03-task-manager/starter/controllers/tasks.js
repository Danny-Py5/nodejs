/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */

const getAllTasks = (req, res) => {
    res.status(200).send('All Tasks');
}

const createTask = (req, res) => {
    console.log(req.body);
    res.status(200).send({'Create Tasks': 'asdfasdfa'});
}

const getTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('get single Tasks');
}

const updateTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('update Tasks');
}

const deleteTask = (req, res) => {
    const {id} = req.params;
    res.status(200).send('Delete Task');
}


module.exports = {
    getAllTasks,
    getTask, 
    updateTask, 
    createTask, 
    deleteTask
}
