const express = require('express');
let {people} = require('./data.js');
const app = express();
const PORT = 4000;


// static assets
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false})) // don't do more than enough;
app.use(express.json())

// 7:15

app.post('/login', (req, res) => {
    const { name } = req.body;
    res.status(200).send(`Welcome ${name}`);
});

app.get('/api/people', (req, res) => {
    return res.status(200).send({success: true, data: people});
});


app.post('/api/people/postman', (req, res) => {
    const { name } = req.body;
    if (!name){
        return res.status(400).send({success: false, msg: 'Not Found'});
    }
    res.status(201).send({success: true, person: [...people,  name]});
});

app.put('/api/people/:id', (req, res) => {
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
});
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const isPerson = people.find(person => person.id === Number(id));
    if (!isPerson){
        return res.status(404).send({success: false, msg: 'Cannot find person with the id ' + id })
    };
    people = people.filter(person => {
        if (person.id  !== Number(id)){
            return person;
        };
    });
    res.status(200).send({success: true, data: people });
});

app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});

 