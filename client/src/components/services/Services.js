import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'
import Service from './Service'

import './services.css'

const Services = () => {
  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    axios
      .get('/api/service/all')
      .then((res) => {
        setServiceData(res.data)
        console.log('Services')
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className='services'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1 className='py-5'>Our Services</h1>
          </Col>
        </Row>
        <Row>
          {serviceData.map((s) => (
            <Service
              _id={s.slug}
              image={s.image}
              name={s.name}
              text={s.text}
              icon={s.icon}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
