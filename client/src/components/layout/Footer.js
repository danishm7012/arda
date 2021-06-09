import React, { useState } from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import Message from '../common/Message'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  const [validated, setValidated] = useState(false)

  const submitHandler = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    let contactData = { email }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('/api/news/add', contactData, config)
      .then((res) => {
        alert('Submitted Successfully!')
      })
      .catch((err) => setErrors(err.response.data))
  }

  return (
    <>
      <footer id='footer'>
        {
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-4 col-md-4'>
                  <div class='footer-info'>
                    <Link to='slider'>
                      <LinkContainer to='/'>
                        <img
                          src='/images/footer-logo.png'
                          className='d-inline-block align-top '
                          alt='DIGI Premier'
                          height='80'
                          width='210'
                        />
                      </LinkContainer>
                    </Link>
                    <br />

                    <p>
                      MB-269 2nd Floor, DHA Phase 6 - Lahore <br />
                      <br />
                      <strong>
                        <i className='fas fa-phone'></i>
                      </strong>
                      {'   '}
                      03xx xxxxxxx
                      <br />
                      <strong>
                        <i class='far fa-envelope'></i>
                      </strong>
                      {'   '}
                      info@arda-global.com
                      <br />
                      <strong>
                        <i className='fas fa-globe'></i>
                      </strong>
                      {'   '}
                      www.arda-global.com
                      <br />
                    </p>
                    <div class='social-links mt-3'>
                      <a
                        href='https://www.facebook.com/ardasolution1/'
                        target='blank'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a href='https://twitter.com/ardasolution' target='blank'>
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/digi-primier-8bb11720a/'
                        target='blank'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                      <a
                        href='https://www.instagram.com/ardasolution/'
                        target='blank'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='/'>
                        <i className='fas fa-globe'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class='col-lg-4 col-md-4 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <Link to='slider'>
                      <LinkContainer to='/'>
                        <li>
                          <i className='fas fa-chevron-right'></i> Home
                        </li>
                      </LinkContainer>
                    </Link>{' '}
                    <br />
                    <Link to='about'>
                      <LinkContainer to='/'>
                        <li>
                          <i className='fas fa-chevron-right'></i> About us
                        </li>
                      </LinkContainer>
                    </Link>
                    <LinkContainer className='link-container' to='/info/career'>
                      <li>
                        <i className='fas fa-chevron-right'></i> Career
                      </li>
                    </LinkContainer>
                    <LinkContainer to='/info/blogs' className='link-container'>
                      <li>
                        <i className='fas fa-chevron-right'></i> Blogs
                      </li>
                    </LinkContainer>
                  </ul>
                </div>

                <div class='col-lg-4 col-md-4 footer-newsletter'>
                  <h4>Our Newsletter</h4>
                  <p>
                    Enter your email ID to get the latest news and feature
                    stories on our businesses, community initiatives, heritage
                    and people.
                  </p>

                  <Form
                    novalidate
                    validated={validated}
                    onSubmit={submitHandler}
                  >
                    <input
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type='submit' value='Subscribe' />
                    {errors.email && (
                      <Message variant='danger'>{errors.email}</Message>
                    )}
                  </Form>
                </div>
              </div>
            </div>

            <div className='pt-4 copy-write text-white text-center'>
              Copyright &copy; {new Date().getFullYear()}
              <strong>
                <span> ARDA Solution</span>
              </strong>
              . All Rights Reserved.
            </div>
          </div>
        }
      </footer>
    </>
  )
}

export default Footer
