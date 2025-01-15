const express = require('express');
let { people } = require('../data.js');
const {
    getPeople,
    addPerson, 
    updatePerson, 
    deletePerson
} = require('../controllers/people.js');

const router = express.Router();


router.get('/', getPeople);

router.post('/postman', addPerson);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
