const express = require('express');
const { products } = require('./data.js');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.status(200).send(`<h1>Home page</h1>`)
});

// api
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const {id, name, image, price} = product ;
        return {id, name, image, price};
    });
    res.json(newProduct);
});

// getting single product using rout param : ...
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find(product => {
        return product.id == Number(productID);
    });
    singleProduct ? res.json(singleProduct) : res.status(404).send('<h1>Product not found</h1><a href="/">Back to home</a>');
});

// url param 
app.get('/api/v1/products/query', (req, res) => {
    console.log(req.query);
    let sortedProduct = [...products];
    const {search, limit} = req.query;
    
    if (search){
        sortedProduct = sortedProduct.filter(product => {
            return product.name.startsWith(search);
        });
    };
    if (limit){
        sortedProduct = sortedProduct.slice(0, limit);
    }; 
    if ((!search && !limit) || (!search && limit) || (!limit && search)){
        return res.status(200).json(products);
    } 
    return sortedProduct.length >= 1 
        ? res.status(200).json(sortedProduct)
        : res.status(200).json({success: true, products: []});
  
});


app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});