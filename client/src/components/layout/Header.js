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
            <Nav.Link className='options' href='/'>
              HOME
            </Nav.Link>

            <NavDropdown
              className='options '
              title='WHAT WE DO'
              id='basic-nav-dropdown'
            >
              <h6 className='pl-2'>Technology</h6>
              <LinkContainer to='/cloud'>
                <NavDropdown.Item className='sub-options'>
                  Cloud
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Enterprise-Solution'>
                <NavDropdown.Item className='sub-options'>
                  Enterprise Solution
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/DevOps'>
                <NavDropdown.Item className='sub-options'>
                  DevOps
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Information-Security'>
                <NavDropdown.Item className='sub-options'>
                  Information Security
                </NavDropdown.Item>
              </LinkContainer>
              <h6 className='pl-2'>Consulting</h6>
              <LinkContainer to='/Digital-Transformation'>
                <NavDropdown.Item className='sub-options'>
                  Digital Transformation
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Advisory-Services'>
                <NavDropdown.Item className='sub-options'>
                  Advisory Services
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Focused-Solutions'>
                <NavDropdown.Item className='sub-options'>
                  Focused Solutions
                </NavDropdown.Item>
              </LinkContainer>
              <h6 className='pl-2'>Education</h6>
              <LinkContainer to='/E-Commerce'>
                <NavDropdown.Item className='sub-options'>
                  E-Commerce
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Digital-Economy'>
                <NavDropdown.Item className='sub-options'>
                  Digital Economy
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              className='options'
              title='WHAT WE ARE'
              id='basic-nav-dropdown'
            >
              <LinkContainer to='/Executive-Team'>
                <NavDropdown.Item className='sub-options'>
                  Executive Team
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Consultant-Profiles'>
                <NavDropdown.Item className='sub-options'>
                  Consultant Profiles
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Our-Partners'>
                <NavDropdown.Item className='sub-options'>
                  Our Partners
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown
              className='options'
              title='SUCCESS STORIES'
              id='basic-nav-dropdown'
            >
              <LinkContainer to='/Case-Studies'>
                <NavDropdown.Item className='sub-options'>
                  Case Studies
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/Customer-Testimonials'>
                <NavDropdown.Item className='sub-options'>
                  Customer Testimonials
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to='/info/career'>
              <Nav.Link className='options' href='#link'>
                CAREER
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/info/news'>
              <Nav.Link className='options' href='#link'>
                News Updates
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Contact'>
              <Button variant='info'>Contact Us</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
