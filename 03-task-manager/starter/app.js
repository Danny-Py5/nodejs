const express = require('express');
const tasksRouter = require('./routes/tasks.js')
const app = express();
const PORT = 4000;

//route 
app.get('/hello', (req, res) => {
    res.status(200).send('Task manager App');
})

// middleware 
// read incoming json
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);


app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`)
});

