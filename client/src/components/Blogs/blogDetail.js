import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import blogs from '../../Data/BlogsData'
import { Link } from 'react-router-dom'
import Meta from '../common/Meta'

const BlogDetail = ({ match }) => {
  const blogId = match.params._id
  const [Blog, setBlog] = useState({})

  useEffect(() => {
    setBlog(blogs.find((b) => b._id === blogId))
  }, [blogId])
  return (
    <div className='section'>
      <Container>
        <Meta
          title={`${Blog.title}- ARDA`}
          description='Stay Update With Our Company'
        />

        <Row>
          <Col>
            <Link to={`/info/blogs`}>
              <Button
                variant='outline-info'
                size='sm'
                style={{ fontSize: 14, float: 'left', marginTop: '0.7rem' }}
              >
                <i class='fas fa-caret-left'></i> Back
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2'>
            <h1>{Blog.title}</h1>
            <strong>
              <p style={{ color: '#0098ed' }}>
                {Blog.auther} | {Blog.date}
              </p>
            </strong>
            <p className='text-left p-2' style={{ fontSize: '1rem' }}>
              {Blog.detail}
            </p>
            <h3>{Blog.H1}</h3>
            <p>{Blog.P1}</p>
            <h3>{Blog.H2}</h3>
            <p>{Blog.P2}</p>
            <h3>{Blog.H3}</h3>
            <p>{Blog.P3}</p>
          </Col>
        </Row>
        <Row>
          <Image
            style={{ height: '90vh', width: '100%' }}
            src={Blog.image}
            alt={Blog.title}
          />
        </Row>
      </Container>
    </div>
  )
}

export default BlogDetail
