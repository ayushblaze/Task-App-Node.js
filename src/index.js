const express = require('express')
require('./db/mongoose.js')
const Task = require('./models/task.js')
const User = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if(req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   if(req.method) {
//     res.status(503).send('The site is under maintaince :(')
//   } else {
//     next()
//   }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server Running on Port '+port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
  const token = jwt.sign({ _id:'abc123' }, 'thisismycourse', { expiresIn: '5 sec' })
  console.log(token)

  const data = jwt.verify(token, 'thisismycourse')
  console.log(data)
}

myFunction()

// const bcrypt = require('bcrypt')

// const myFunction = async () => {
//   const password = 'Eclipse345'
//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare('Eclipse345', hashedPassword)
//   console.log(isMatch)
// }

// myFunction()