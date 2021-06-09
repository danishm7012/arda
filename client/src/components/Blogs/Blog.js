import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  return (
    <div className='section'>
      <Row>
        <Col lg={6} sm={12} className='order-2 order-lg-1'>
          <h3>{blog.title}</h3>
          <p className='m-2 py-2 blog-p'>
            {blog.detail.slice(0, 500)}...{' '}
            <Link to={`/blogs/${blog._id}`}>
              <span style={{ color: 'whitesmoke' }}>Read more</span>
            </Link>{' '}
            <br />
            <br />
            <h6>
              {blog.auther} | {blog.date}
            </h6>
          </p>
        </Col>
        <Col lg={6} sm={12} className='text-center order-1 order-lg-2'>
          <Image src={blog.image} height='80%' width='100%' rounded></Image>
        </Col>
      </Row>
    </div>
  )
}

export default Blog
