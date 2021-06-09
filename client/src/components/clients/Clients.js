import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import ClientsData from '../../Data/clients'
import './client.css'

const Clients = () => {
  return (
    <div className='section'>
      <Container>
        <Row>
          <Col className='text-center pb-2'>
            <h1>Our Clients</h1>
            <p className='client-p'>
              Happy clients are your biggest advocates and can become your most
              successful sales team.
            </p>
          </Col>
        </Row>
        <Row>
          {ClientsData.map((c) => (
            <Col lg={3} md={3} sm={6} xm={6}>
              <Card className='client-card'>
                <div className='client-image'>
                  <Card.Img variant='top' src={c.logo} />
                </div>
                <Card.Body>
                  <Card.Title>{c.name}</Card.Title>

                  <a href={c.website} rel='noreferrer' target='_blank'>
                    <Button variant='primary'>Visit Website</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Clients
