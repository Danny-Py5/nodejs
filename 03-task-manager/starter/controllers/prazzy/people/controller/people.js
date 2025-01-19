const {
    getPeopleFs,
    saveFile,
} = require('../model/people.js');
const asyncWrapper = require('../middleware/asyncWrapper.js');

const getAllPeople = asyncWrapper( async (req, res) => {
    try {
        const people = await getPeopleFs();
        res.status(200).json(JSON.parse(people));
    } catch (error) {
        console.log(error);
    }
});
const addPerson = (req, res) => {
    console.log(req.body)
}

module.exports = {
    getAllPeople,
    addPerson,
};