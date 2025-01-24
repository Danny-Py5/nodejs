const { CustomAPIError } = require('../error/customError.js');

/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const errorHandlerMiddleware = (err, req, res, next) => {
    //console.log(err);
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message, status: err.statusCode, success: false});
    }
    res.status(500).send('Something went wrong, try again later.');
};


module.exports = errorHandlerMiddleware;
