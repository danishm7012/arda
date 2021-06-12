import React from 'react'
import { Container, Card, Col } from 'react-bootstrap'
import companies from '../../companiesData/clientCompanies'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HomeWrapper } from './style'
import './companySlider.css'

export default function CompanySlider() {
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
    <div className='client-section'>
      <HomeWrapper>
        <Container>
          <Slider {...settings}>
            {companies.map(function (company) {
              return (
                <React.Fragment>
                  <Col>
                    <a
                      href={`${company.website}`}
                      target='_blank'
                      rel='noreferrer'
                      alt='website'
                    >
                      <Card className='company-card'>
                        <Card.Img
                          className='company-card-img'
                          variant='top'
                          src={company.logo ? company.logo : company.image}
                        />
                      </Card>
                    </a>
                  </Col>
                </React.Fragment>
              )
            })}
          </Slider>
        </Container>
      </HomeWrapper>
    </div>
  )
}
