import React from 'react'
import { Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ _id, image, name, text }) => {
  return (
    <>
      <Col lg={4} md={4} sm={12} xs={12}>
        <Card style={{ width: '100%', height: 'auto', background: 'black' }}>
          <Card.Img height='200' width='250' src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Link to={`/service/${_id}`}>
              <Button variant='outline-info' size='md'>
                Learn More
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Service
