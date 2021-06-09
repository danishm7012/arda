const express = require('express')
const router = express.Router()

// Load Service model
const Service = require('../../models/Service')

// @route   GET api/service/test
// @desc    Tests service route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Service Works' }))

// @route   GET api/service/add
// @desc    Add Service
// @access  Public
router.post('/add', (req, res) => {
  const newService = new Service({
    slug: req.body._id,
    name: req.body.name,
    category: req.body.category,
    icon: req.body.icon,
    text: req.body.text,
    image: req.body.image,
    detail: req.body.detail,
  })

  newService
    .save()
    .then(res.json({ success: 'service is added!' }))
    .catch((err) => console.log(err))
})

// @route   GET api/service/all
// @desc    Get all services
// @access  Public
router.get('/all', (req, res) => {
  Service.find()
    .then((services) => {
      res.status(200).json(services)
    })
    .catch((err) => res.status(404).json({ services: 'There are no services' }))
})

// @route   GET api/service/:slug
// @desc    Get single service by slug
// @access  Public
router.get('/slug/:slug', (req, res) => {
  Service.findOne({ slug: req.params.slug })
    .then((service) => {
      res.status(200).json(service)
    })
    .catch((err) => res.status(400).json(err))
})
module.exports = router
