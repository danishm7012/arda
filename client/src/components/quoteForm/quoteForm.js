import React, { useState } from 'react'
import Message from '../common/Message'
import axios from 'axios'
import { Col, Form, Button } from 'react-bootstrap'
import './quote.css'
const QuoteForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [details, setDetails] = useState('')

  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (event) => {
    event.preventDefault()

    let contactData = {
      name,
      email,
      phone,

      company,
      details,
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('/api/quote/add', contactData, config)
      .then((res) => {
        setErrors({})
        alert(res.data.success)
        setSuccess(res.data.success)
      })
      .catch((err) => {
        setSuccess(false)
        setErrors(err.response.data)
      })
  }

  return (
    <section id='contact' class='contact'>
      <div class='container' data-aos='fade-up'>
        <div className='py-4 text-center'>
          <Form onSubmit={submitHandler}>
            <h1>Get A Perfect Quote</h1>
            <p style={{ color: 'lightgray' }}>
              We're eager to work with you. Please share your project goals and
              contact information. Our team will respond to you within 1-2
              business day.
            </p>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Control
                  type='text'
                  placeholder='Full Name'
                  value={name}
                  isInvalid={errors.name}
                  className='text-line'
                  onChange={(e) => setName(e.target.value)}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Control
                  type='email'
                  placeholder='Your Email'
                  value={email}
                  isInvalid={errors.email}
                  className='text-line'
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId='formGridAddress1'>
              <Form.Control
                type='text'
                placeholder='Website URL'
                value={company}
                isInvalid={errors.company}
                className='text-line'
                onChange={(e) => setCompany(e.target.value)}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.company}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Control
                  type='text'
                  placeholder='Contact No.'
                  value={phone}
                  isInvalid={errors.phone}
                  className='text-line'
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId='formTextarea'>
              <Form.Control
                as='textarea'
                placeholder='Additional Info'
                value={details}
                isInvalid={errors.details}
                className='text-line'
                onChange={(e) => setDetails(e.target.value)}
                rows={6}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.details}
              </Form.Control.Feedback>
            </Form.Group>
            {success && <Message variant='success'>{success}</Message>}
            <div className='text-center'>
              <Button className='contact-btn' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
