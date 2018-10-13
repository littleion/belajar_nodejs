const express = require('express')

const app = express()
 
//load routes
const userRoutes = require('./routes/user')
const ideasRoutes = require('./routes/ideas')

//routes
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/user', userRoutes)
app.use('/ideas', ideasRoutes)

 
app.listen(3000, () => {
    console.log(`Server started on port 3000`)
})
