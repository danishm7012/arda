import React from 'react'
import './contact.css'
import { Form, Button, Col } from 'react-bootstrap'
function contactUs() {
  return (
    <>
      <section id='contact-us' className='contact-us section'>
        <div className='container' data-aos='fade-up'>
          <div className='section-title'>
            <h2>Contact Us</h2>
            <iframe
              title='PROGcc office'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5269363452203!2d55.25959091434539!3d25.185446483901682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0ffbfffff%3A0x561a6d9c9da2b17d!2sPARK%20LANE%20TOWER!5e0!3m2!1sen!2s!4v1618552117335!5m2!1sen!2s'
              width='100%'
              height='100'
              style={{ border: 0 }}
              allowfullscreen=''
              loading='lazy'
            ></iframe>
          </div>

          <div className='row' data-aos='fade-up' data-aos-delay='100'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='info-box'>
                    <i class='far fa-compass'></i>
                    <h3>Our Address</h3>
                    <p>
                      <span>UAE Office:</span> Park Lane Plaza, 12th Floor,
                      Office No. 1213, Down Town, Dubai UAE. P.O. BOX 415253
                      <br />
                      <span>UK Office:</span> 3rd Floor, 244 Edgware Road,
                      London W2 1DS, UK.
                      <br />
                      <span>PAK Office:</span> Office No.18, Naqi Arcade, 71-The
                      Mall Road, Lahore, Pakistan.
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box mt-4'>
                    <i class='far fa-envelope'></i>
                    <h3>Email Us</h3>
                    <p>
                      info@arda-global.com
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box mt-4'>
                    <i class='fas fa-phone-alt'></i>
                    <h3>Call Us</h3>
                    <p>
                      <span>UAE:</span> +971 xx xxxxxx <br />
                      <span>UK:</span> +44 xxx xxxxxx
                      <br />
                      <span>PAK</span> +92 xxx xxxxxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <Form className='php-email-form'>
                <h2 className='py-1'>GET IN TOUCH WITH US.</h2>
                <Form.Row>
                  <Form.Group as={Col} controlId='formGridName'>
                    <Form.Control
                      type='text'
                      className='form-control'
                      placeholder='Your Name'
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Control
                      type='email'
                      className='form-control'
                      placeholder='Your Email'
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId='formGridAddress1'>
                  <Form.Control
                    className='form-control'
                    placeholder='Subject'
                  />
                </Form.Group>

                <Form.Group controlId='formTextarea'>
                  <Form.Control
                    as='textarea'
                    className='form-control'
                    placeholder='Your Message'
                    rows={6}
                  />
                </Form.Group>
                <div className='text-center'>
                  <Button className='contact-btn' type='submit'>
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default contactUs
