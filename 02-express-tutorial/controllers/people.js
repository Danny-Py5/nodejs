// const express = require('express');
let {people} = require('../data.js');


const getPeople = (req, res) => {
    return res.status(200).send({success: true, data: people});
};

const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name){
        return res.status(400).send({success: false, msg: 'Not Found'});
    }
    res.status(201).send({success: true, person: [...people,  name]});
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    console.log(id)
    const { name } = req.body;
    const isPerson = people.find(person => person.id === Number(id));
    if (!isPerson){
        return res.status(404).send({success: false, msg: 'Cannot find person with the id ' + id })
    };

    people = people.filter(person => {
        if (person.id  === Number(id)){
            person.name = name;
        };
        return person;
    })
    res.status(200).send({success: true, data: people });
};

const deletePerson =  (req, res) => {
    const { id } = req.params;
    const isPerson = people.find(person => person.id === Number(id));
    if (!isPerson){
        return res.status(404).send({success: false, msg: 'Cannot delete person with the id ' + id })
    };
    people = people.filter(person => {
        if (person.id  !== Number(id)){
            return person;
        };
    });
    res.status(200).send({success: true, data: people });
}

module.exports = {
    getPeople,
    addPerson, 
    updatePerson, 
    deletePerson
};
