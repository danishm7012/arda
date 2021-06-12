import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Container, Col, Button } from 'react-bootstrap'
import './serviceDetail.css'
import Meta from '../common/Meta'

function ServiceDetail({ match }) {
  const [service, setService] = useState('')
  const slug = match.params._id

  //get brower history
  let history = useHistory()

  useEffect(() => {
    setService('')
    setService(slug)
  }, [slug])
  return (
    <div className='service-detail'>
      <Meta title={`${service}`} />
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
          <Col lg={12} md={12} sm={12} xm={12}>
            <p>{`${service} content will be displayed here!`}</p>
            {/* <p>{service.detail}</p> */}
          </Col>
          {/*  <Col lg={6} md={6} sm={12} xm={12}>
            <Image src={service.image} height='auto' width='100%' />
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default ServiceDetail
