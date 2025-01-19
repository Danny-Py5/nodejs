const notFound = (req, res) => {
    return res.status(404).send('Rout not found.');
};

module.exports = notFound;