const express = require('express')
const router = express.Router()

// Load Input Validation
const validateQuoteInput = require('../../validation/quote')

// Load User model
const Quote = require('../../models/Quote')
// @route   GET api/quote/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Quote is  Working' }))

// @route   GET api/quote/add
// @desc    Register user
// @access  Public
router.post('/add', (req, res) => {
  const { errors, isValid } = validateQuoteInput(req.body)

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  // Get fields
  const QuoteFields = {}

  if (req.body.name) QuoteFields.name = req.body.name
  if (req.body.email) QuoteFields.email = req.body.email
  if (req.body.phone) QuoteFields.phone = req.body.phone
  if (req.body.skype) QuoteFields.skype = req.body.skype
  if (req.body.company) QuoteFields.company = req.body.company
  if (req.body.budget) QuoteFields.budget = req.body.budget
  if (req.body.started) QuoteFields.started = req.body.started
  if (req.body.details) QuoteFields.details = req.body.details

  // Create Quote
  // Save Quote
  new Quote(QuoteFields)
    .save()
    .then(() =>
      res.status(200).json({ success: 'Quote is Submitted Successfully!' })
    )
    .catch((err) => res.status(404).json(err))
})

module.exports = router
