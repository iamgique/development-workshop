const add = async (req, res) => {
    const result = req.a + req.b
    console.log(req.a + '+' + req.b + '=' + result)
    await res.send(result)
}

const minus = async (req, res) => {
    await res.send('Hello minus!')
}


const multiply = async (req, res) => {
    await res.send('Hello multiply!')
}

const divide = async (req, res) => {
    await res.send('Hello divide!')
}

module.exports = {
    add: add,
    minus: minus,
    multiply: multiply,
    divide: divide
}