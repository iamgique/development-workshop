const index = (req, res) => {
    console.log('Hello World!')
    res.send('Hello World!')
};

module.exports = {
    index: index
}

