const {readFile, writeFile} = require('fs');
const readFilePromisify = require('util').promisify(readFile);

const people = [
    {
        name: 'daniel', 
        age: 20,
        height: '30m'
    },
    {
        name: 'Precious', 
        age: 22,
        height: '40m'
    },
];


const saveFile = (obj) => {
    writeFile('people.txt', JSON.stringify(obj), 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
        };
    });
};

function addPersonFs(person) {
    let allPersons;
    getPeopleFs()
        .then(result => {
            allPersons = JSON.parse(result);
            console.log(allPersons);
        });
}

function getPeopleFs() {
    return new Promise((resolve, reject) => {
        readFile('./people.txt', 'utf8', (error, result) => {
            if (error){
                reject(error)
            } else {
                resolve(result);
            };
        });
    });
};

module.exports = {
    getPeopleFs,
    saveFile,
    addPersonFs,
}
