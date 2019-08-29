const add = async (req, res) => {
    const result = req.params.a + req.params.b
    console.log(req.params.a + '+' + req.params.b + '=' + result)
    await res.send(result)
}

const subtract = async (req, res) => {
    await res.send('Hello subtract!')
}


const multiply = async (req, res) => {
    await res.send('Hello multiply!')
}

const divide = async (req, res) => {
    await res.send('Hello divide!')
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}