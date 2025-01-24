const express = require('express');
const { products } = require('./data.js');
const app = express();
const PORT = 4000;


const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear());

    next(); // calling next here will go to the next respected middleware 
}

app.use('/api', logger); // this will be middleware for all rout starting with /api ###Will not work for any rout like /about, /item etc.... 


app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

app.get('/api/products', (req, res) => {
    res.send('products')
})
app.get('/api/items', (req, res) => {
    res.send('items')
})

app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});