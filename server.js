const express = require('express')
const mongoose = require('mongoose')
const contact = require('./routes/api/contact')
const career = require('./routes/api/career')
const newslatter = require('./routes/api/news')
const quote = require('./routes/api/qoute')
const service = require('./routes/api/service')

const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
// Body parser middleware
app.use(express.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

// Use Routes
app.use('/api/contact/', contact)
app.use('/api/career/', career)
app.use('/api/news/', newslatter)
app.use('/api/quote/', quote)
app.use('/api/service/', service)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
