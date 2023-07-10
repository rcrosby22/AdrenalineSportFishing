const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/authRouter')

const bookingRouter = require('./routes/bookingRouter');
const reviewRouter = require('./routes/reviewRouter');
const serviceRouter = require('./routes/serviceRouter');



const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

//middleware

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

app.use('/auth', authRouter)

app.use('/bookings', bookingRouter);
app.use('/reviews', reviewRouter);
app.use('/services', serviceRouter);


app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})


module.exports = app;