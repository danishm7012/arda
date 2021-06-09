import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './companySlider.css'

import { Card, Col, Container } from 'react-bootstrap'

import ClientReviews from './clientReviews/ClientReviews'
import { HomeWrapper } from './style'
import { Link } from 'react-router-dom'
import React from 'react'
import Slider from 'react-slick'
import SliderData from '../../Data/SliderData'

// import Title from '../common/title'

export default function TestmonialSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,

    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <HomeWrapper>
      <div id='testimonial' className='section'>
        <h1 className='text-center  '>Testmonials</h1>
        <ClientReviews />
        <Container className='mt-4'>
          <Slider {...settings}>
            {SliderData.map(function (company) {
              return (
                <React.Fragment>
                  <Link to={`/${company._id}`}>
                    <Col>
                      <Card className='company-card my-4'>
                        <Card.Img
                          className='company-card-img'
                          variant='top'
                          src={company.logo}
                        />
                      </Card>
                    </Col>
                  </Link>
                </React.Fragment>
              )
            })}
          </Slider>
        </Container>
      </div>
    </HomeWrapper>
  )
}
