import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Container, Col, Image, Button } from 'react-bootstrap'
import Contact from '../contact/Contact'
import axios from 'axios'

import './serviceDetail.css'
import Meta from '../common/Meta'

function ServiceDetail({ match }) {
  const [service, setService] = useState({})
  const slug = match.params._id

  //get brower history
  let history = useHistory()

  useEffect(() => {
    axios
      .get(`/api/service/slug/${slug}`)
      .then((res) => {
        setService(res.data)
      })
      .catch((err) => console.log(err))
  }, [slug])
  return (
    <div className='service-detail'>
      <Meta title={`${service.name}`} />
      <Container>
        <Row>
          {' '}
          <Button
            variant='outline-info'
            size='sm'
            className='my-2'
            onClick={() => history.goBack()}
            style={{ fontSize: 16, float: 'left' }}
          >
            <i class='fas fa-caret-left'></i> Back
          </Button>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12} xm={12}>
            <h1>{service.name}</h1>
            <p>{service.detail}</p>
          </Col>
          <Col lg={6} md={6} sm={12} xm={12}>
            <Image src={service.image} height='auto' width='100%' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceDetail
