const {readFile, writeFile} = require('fs');

const firstFileName = './content/first.txt';
const secondFileName = './content/second.txt';
const writeFilename = './content/result-async.txt';

// callback hell;
/*
readFile(firstFileName, 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    const first = result;

    readFile(secondFileName, 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return;
        };
        const second = result;

        writeFile(writeFilename, `Hello there, this is the result ${first}, ${second}`,  (err, result) => {
            if (err){
                console.log(err)
                return;
            };
            console.log(result)
        });
    });

});
*/

let first, second, readOutPut;

readFile(firstFileName, 'utf8', (err, result) => {
    displayResult(err, result, first)   
});
readFile(secondFileName, 'utf8', (err, result) => {
    displayResult(err, result, second)
});

writeFile(writeFilename, `\nHello there, this is the result ${first}, ${second}.... flat`, {flag: 'a'},  (err, result) => {
    displayResult(err, result, readOutPut);
    console.log({first, second, readOutPut})
});

function displayResult(err, result, set){
    if (err){
        console.log(err);
        return;
    };
    set = result;
};


