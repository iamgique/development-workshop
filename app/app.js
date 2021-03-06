const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
)

app.use(require('./routes/'));
app.use(require('./routes/calculate'));