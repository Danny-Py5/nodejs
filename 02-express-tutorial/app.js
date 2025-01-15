const express = require('express');
const peopleRoute = require('./routes/people.js');
const authRoute = require('./routes/auth.js');
const app = express();
const PORT = 4000;

// static assets
app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false})) // don't do more than enough;
app.use(express.json());

app.use('/api/people', peopleRoute);
app.use('/login', authRoute);

// 7:15

app.listen(PORT, () => {
    console.log('Server is litenning on port : ', PORT, '.....');
});

 