const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            fn(req, res);
        } catch (error) {
            res.status(500).send('Erro occured')
        }
    }
}