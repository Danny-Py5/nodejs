/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const errorHandlerMiddleware = (err, req, res, next) => {
    //console.log(err);
    return res.status(err.statusCode).json({msg: err.message, status: err.statusCode, success: false});
};


module.exports = errorHandlerMiddleware;
