const connectDB = require('./db/connect.js');
const express = require('express');
const tasksRouter = require('./routes/tasks.js');
require('dotenv').config();
const app = express();
const PORT = 4000;

//route 
app.get('/hello', (req, res) => {
    res.status(200).send('Task manager App');
})

// middleware 
// read incoming json
app.use(express.json());
app.use(express.static('./public'));
// app.use(express.urlencoded({extended: false}))
app.use('/api/v1/tasks', tasksRouter);


const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        const timeStart = new Date();
        app.listen(PORT, () => {
            console.log(`Server listening to port: ${PORT}\nTime used: ${timeStart.getMinutes()}`)
        });
    } catch (error) {
        console.log(error)
    };
};

startServer();


