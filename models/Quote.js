const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const QuoteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    required: true,
    type: String,
  },
  skype: {
    type: String,
  },
  budget: {
    type: String,
  },
  started: {
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Quote = mongoose.model('quote', QuoteSchema)
