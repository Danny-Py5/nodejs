const {
    getPeopleFs,
    saveFile,
} = require('../model/people.js');

const getAllPeople = async (req, res) => {
    const people = await getPeopleFs();
    res.status(200).json(JSON.parse(people));
};
const addPerson = (req, res) => {
    console.log(req.body)
}

module.exports = {
    getAllPeople,
    addPerson,
};