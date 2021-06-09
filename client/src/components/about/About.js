import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

const About = () => {
  return (
    <div id='about' style={{ paddingTop: '2rem' }}>
      <Container>
        <Row>
          <Col>
            {' '}
            <h1 className='ml-auto py-5'>About US</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} className={`order-1 order-lg-1`}>
            <Image
              src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              height='auto'
              width='100%'
            />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className={` order-1 order-lg-2`}>
            <p className='service-p'>
              <span>
                Digital Marketing is the top-most flourishing field globally.
              </span>{' '}
              The role of digital media marketing and new automated supporting
              tools in successful business increase manifold in a few years. It
              seems permanent phenomena in the future as well. At present, it is
              the key to marketing for promotion of brands and reaching high
              potential of customers, hot and convertible leads.
              <br /> We are here to help you with our experts regarding your
              business marketing solutions and several essential tips you are
              running out of. We know how to create sale funnels, and we are an
              authority in targeted audience and end-users through our business
              intelligence strategies. We are implementing a Successful model to
              reach the specific clientele.
              <br />
              <br /> What are you waiting for when we have got your back using
              the following potentials of digital marketing as a key to your
              success? <br />
              Go ahead and check out what we have for you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
