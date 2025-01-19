const asyncWrapper = (fn) => {
    return async (req, res) => {
        try {
            fn(req, res);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = asyncWrapper;