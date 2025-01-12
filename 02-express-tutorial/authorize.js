// middleware fuction 
const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'daniel'){
        // add a property to the big req obj
        req.user = {
            name: 'daniel', 
            age: 20,
            isProgrammer: true
        }
        next();
    } else {
        // with the help of middleware, we can quickly check validation and update user b4 even going to any or matching request's  (maybe path has been set to target a specific request) fuction in the app.js file;
        res.status(401).send('Note authorized');

        next();
    }

}

module.exports = {authorize: authorize};

