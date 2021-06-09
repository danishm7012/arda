import React, { useState } from 'react'
import Message from '../common/Message'
import axios from 'axios'
import { Col, Form, Button } from 'react-bootstrap'
import './contact.css'
const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [success, setSuccess] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (event) => {
    event.preventDefault()

    let contactData = { name, email, subject, message }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('/api/contact/add', contactData, config)
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
            <h1>GET IN TOUCH WITH US.</h1>
            <Form.Row>
              <Form.Group as={Col} controlId='formGridName'>
                <Form.Control
                  type='text'
                  placeholder='Your Name'
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
                placeholder='Subject'
                value={subject}
                isInvalid={errors.subject}
                className='text-line'
                onChange={(e) => setSubject(e.target.value)}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formTextarea'>
              <Form.Control
                as='textarea'
                placeholder='Your Message'
                value={message}
                isInvalid={errors.message}
                className='text-line'
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />

              <Form.Control.Feedback type='invalid'>
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            {success && <Message variant='success'>{success}</Message>}
            <div className='text-center'>
              <Button className='contact-btn' type='submit'>
                Send Message
              </Button>
            </div>
          </Form>
        </div>

        <div class='row'>
          <div class='col-lg-4'>
            <div class='info'>
              <div class='address'>
                <i class='fas fa-map-marker-alt'></i>
                <h4>Location:</h4>
                <p>MB-269 Second Floor, DHA Phase 6 - Lahore, Pakistan</p>
              </div>

              <div class='email'>
                <i class='far fa-envelope'></i>
                <h4>Email:</h4>
                <p>info@digipremier.org</p>
              </div>

              <div class='phone'>
                <i class='fas fa-mobile-alt'></i>
                <h4>Call:</h4>
                <p>+92 333 0668 656</p>
              </div>
            </div>
          </div>
          <div class='pt-3 col-lg-8'>
            <iframe
              style={{ width: '100%', height: '270px' }}
              title='map location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.856021269435!2d74.44888923752985!3d31.476873046867944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190920e59fccd3%3A0x56cae6ee2c7a479b!2sDHA%20Phase%206%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1617100492948!5m2!1sen!2s'
              frameborder='0'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
