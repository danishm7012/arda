const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  image: {
    required: true,
    type: String,
  },
  detail: {
    required: true,
    type: String,
  },
})

module.exports = Service = mongoose.model('service', ServiceSchema)
