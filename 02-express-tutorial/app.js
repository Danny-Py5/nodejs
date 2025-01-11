const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;
const homePage = path.resolve(__dirname, 'navbar-app/index.html');


// express use
app.use(express.static('./public'));


// requests....
app.get('/', (req, res) => {
    res.status(200).sendFile(homePage);
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(PORT, () => {
    console.log('Server is listening for port: ', PORT);
    console.log({__dirname});
});