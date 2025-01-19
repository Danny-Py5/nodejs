const connectDB = require('./db/connect.js');
const express = require('express');
const tasksRouter = require('./routes/tasks.js');
require('dotenv').config();
const notFound = require('./milddleware/notFound.js')
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

app.use(notFound)

// app.get('*', (req, res) => {
//     // 
//     return res.status(404).send('Not found');
// }).put("*", (req, res) => {
//     return res.status(404).send('Not found');
// });

const startServer = async () => {
    try {
        const timeStart = new Date();
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server listening to port: ${PORT}\nseconds start ${timeStart.getSeconds()} seonds now: ${new Date().getSeconds()}`)
        });
    } catch (error) {
        console.log(error)
    };
};

startServer();


