const express = require('express');
const { products } = require('./data.js');
const app = express();
const PORT = 4000;


const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getFullYear());

    next();
}


app.get('/', logger, (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', logger, (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

app.get('/api/products', logger, (req, res) => {
    res.send('products')
})
app.get('/api/items', logger, (req, res) => {
    res.send('items')
})

app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});