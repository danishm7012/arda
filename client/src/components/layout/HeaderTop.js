import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SamplePage from '../translatorApi/TestedApi'
import '../translatorApi/TranslateAPI.css'
function HeaderTop() {
  return (
    <div>
      <Navbar className='nav1' expand='md'>
        <Nav className='ml-auto textcolors'>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link
              href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@paradisegoc.com&su=Our beloved DigiPremier goc&body=Leave a message!%20'
              target='_blank'
            >
              <strong className='fas fa-envelope faHeader'></strong>
              <span className='lowercase'>info@digipremier.org</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='tel:+923330668656' target='_blank'>
              <strong className='fas fa-phone-alt faHeader'></strong>
              <span>+92 333 0668 656</span>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className='translateApi'>
            <SamplePage />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaderTop
