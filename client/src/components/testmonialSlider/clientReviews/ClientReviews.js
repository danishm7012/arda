import { Card, Col, Container, Row } from 'react-bootstrap'

import React from 'react'

const ClientReviews = () => {
  return (
    <div id="testimonial" className="section text-center ">
      {/* <h1>Testimonials</h1> */}
      <Container>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <Card style={{ backgroundColor: 'rgb(12, 12, 12)', color: '#fff' }}>
              {/* <Card.Img src='/images/teams/1.png'></Card.Img> */}
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title>
                {' '}
                I was very sceptical about SEO services in advanced of being
                introduced to Matt, but whatever it is Matt does, works like
                magic!{' '}
              </Card.Title>
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title>Brilliant Highly recomended</Card.Title>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <Card style={{ backgroundColor: 'rgb(12, 12, 12)', color: '#fff' }}>
              {/* <Card.Img src='/images/teams/1.png'></Card.Img> */}
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title> Glad to have you on our team </Card.Title>
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title>
                I would not hesitate to recomend him to anyone who is looking
                for a very professionel and through SEO contractor{' '}
              </Card.Title>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <Card style={{ backgroundColor: 'rgb(12, 12, 12)', color: '#fff' }}>
              {/* <Card.Img src='/images/teams/1.png'></Card.Img> */}
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title>
                {' '}
                Deliver our work within six week where other could not in five
                month. Very happy with work so far, and will continue to use his
                services{' '}
              </Card.Title>
              <i class="fas fa-quote-right" style={{ color: 'yellow' }}></i>
              <Card.Title>Refreshingly honest advice.</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ClientReviews
