const express = require('express');
const route = express.Router();

const {
    getAllPeople, 
    addPerson, 
} = require('../controller/people.js');



route.get('/', getAllPeople);
route.post('/', addPerson)


module.exports = route;