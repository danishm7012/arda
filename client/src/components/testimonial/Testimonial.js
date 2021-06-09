import { Card, Col, Container, Row } from 'react-bootstrap'

import React from 'react'

const Testimonial = () => {
  return (
    <div id='team' className='section text-center '>
      <h1>OUR TEAM</h1>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <Card className='team-card'>
              <Card.Img src='/images/teams/1.png'></Card.Img>
              <Card.Title>SEO Expert</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card className='team-card'>
              <Card.Img src='/images/teams/2.png'></Card.Img>
              <Card.Title>SMM Specialist</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card className='team-card'>
              <Card.Img src='/images/teams/4.png'></Card.Img>
              <Card.Title>Project Manager</Card.Title>
            </Card>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <Card className='team-card'>
              <Card.Img src='/images/teams/3.png'></Card.Img>
              <Card.Title>PPC Expert</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial
