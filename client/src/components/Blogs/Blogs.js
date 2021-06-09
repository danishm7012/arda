import React from 'react'
import Meta from '../common/Meta'
import { Container, Row, Col } from 'react-bootstrap'
import BlogData from '../../Data/BlogsData'
import Blog from './Blog'
import './blogs.css'
const Blogs = () => {
  return (
    <div className='section'>
      <Meta title='Blogs - Digi Premier' />
      <Row>
        <Col className='text-center'>
          <h1>Blogs</h1>
        </Col>
      </Row>
      <Container>
        {BlogData.map((blog) => (
          <Blog blog={blog} />
        ))}
      </Container>
    </div>
  )
}

export default Blogs
