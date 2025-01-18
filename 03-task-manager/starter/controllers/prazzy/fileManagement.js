const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const saveTofile = async (visitedTime) => {
    try {
        await writeFilePromise('./storage.txt', JSON.stringify({
            visitedTime
        }), 'utf8');
        console.log('Saved.')
    } catch (error) {
        console.log(error);
    }
};

async function getFromFile() {
    try {
        const data = await readFilePromise('./storage.txt', 'utf8');
    } catch (error) {
        console.log(error)
    };
};

console.log(getFromFile());

