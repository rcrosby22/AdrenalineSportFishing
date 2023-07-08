const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const AuthRouter = require('./routes/AuthRouters')
const PostRouter = require('./routes/PostRouters')
const ServiceRouter = require('./routes/ServiceRoutes');
const BookingRouter = require('./routes/BookingRoutes')
const ReviewRouter = require('./routes/ReviewRoutes');


const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)
app.use('/services', ServiceRouter);
app.use('/bookings', BookingRouter);
app.use('/reviews', ReviewRouter);

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})


module.exports = app;