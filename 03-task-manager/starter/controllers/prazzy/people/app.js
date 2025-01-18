const express = require('express');
const peopleRouter = require('./route/people.js'); 
const port = 4500;
const app = express();


app.use(express.json());
app.use('/api/v1/people', peopleRouter);

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});



