/**
 * @param {import('express').Request} req - The request object
 * @param {import('express').Response} res - The response object
 */
const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({msg: err});
};


module.exports = errorHandlerMiddleware;
