import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

const TitleSection = ({ title, paragraph, image }) => {
  return (
    <div className='title-section'>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <p>{paragraph}</p>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Image src={image} height='auto' width='100%' />
        </Col>
      </Row>
    </div>
  )
}

export default TitleSection
