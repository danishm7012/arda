import { Card, Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import './ranking.css'

import React from 'react'

const percentage = 80
const percentage2 = 70
const percentage3 = 30

export default function Ranking() {
  return (
    <div id='testimonial' className='section text-center'>
      <h1 className='pb-5'>WHY GOOD RANKING ARE VITAL</h1>
      <div className='ranking'>
        <Container>
          <Row
            style={{
              margin: 0,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            className='px-3'
          >
            <Col lg={3} md={3} sm={3} xs={3}>
              <Card className='ranking-card'>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#ed9321',
                    trailColor: '#fff',
                    backgroundColor: '#3e98c7',
                  })}
                />

                <Card.Title style={{ color: '#fff', paddingTop: '0.2rem' }}>
                  Around 80% of users only check the first page of the search
                  result
                </Card.Title>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <Card className='ranking-card'>
                <CircularProgressbar
                  value={percentage2}
                  text={`${percentage2}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    path: {
                      // Path color
                      stroke: `rgba(62, 152, 199, ${percentage2 / 10})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: 'butt',
                      // Customize transition animation
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // Rotate the path
                      transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#ed9321',

                    trailColor: '#fff',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <Card.Title></Card.Title>
                <Card.Title style={{ color: '#fff' }}>
                  Approximately 70% of users only check the first five result
                </Card.Title>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3}>
              <Card className='ranking-card'>
                <CircularProgressbar
                  value={percentage3}
                  text={`${percentage3}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#ed9321',
                    trailColor: '#fff',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <Card.Title></Card.Title>
                <Card.Title style={{ color: '#fff' }}>
                  Ranking number 1 for a search item can attract over 30% of the
                  traffic
                </Card.Title>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
