const express = require('express');
const { products } = require('./data.js');
const app = express();
const PORT = 4000;



app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});