import React from 'react'
import { Link } from 'react-scroll'
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './header.css'

const Header = () => {
  return (
    <Navbar
      className='p-0'
      collapseOnSelect
      expand='lg'
      variant='light'
      bg='light'
      sticky='top'
    >
      <Container>
        <Link to='slider'>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='/images/logo.png'
                className='d-inline-block align-top '
                height='80'
                width='230'
                alt='ARDA Solution'
              />
            </Navbar.Brand>
          </LinkContainer>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto nav'>
            <Nav.Link className='options' href='#home'>
              HOME
            </Nav.Link>

            <NavDropdown
              className='options '
              title='WHAT WE DO'
              id='basic-nav-dropdown'
            >
              <h6 className='pl-2'>Technology</h6>
              <NavDropdown.Item className='sub-options' href='#action/3.1'>
                Cloud
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Enterprise Solution
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.3'>
                DevOps
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.4'>
                Information Security
              </NavDropdown.Item>
              <h6 className='pl-2'>Consulting</h6>
              <NavDropdown.Item className='sub-options' href='#action/3.1'>
                Digital Transformation
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Advisory Services
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.3'>
                Focused Solutions
              </NavDropdown.Item>
              <h6 className='pl-2'>Education</h6>
              <NavDropdown.Item className='sub-options' href='#action/3.1'>
                E-Commerce
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Digital Economy
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='options'
              title='WHAT WE ARE'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item className='sub-options' href='#action/3.1'>
                Executive Team
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Consultant Profiles
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Our Partners
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='options'
              title='SUCCESS STORIES'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item className='sub-options' href='#action/3.1'>
                Case Studies
              </NavDropdown.Item>
              <NavDropdown.Item className='sub-options' href='#action/3.2'>
                Customer Testimonials
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='options' href='#link'>
              CAREER
            </Nav.Link>
            <Nav.Link className='options' href='#link'>
              News Updates
            </Nav.Link>
            <Button variant='info'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
