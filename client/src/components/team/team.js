import React from 'react'
import Member from './member'
import './team.css'

const team = () => {
  return (
    <div id='team' class='team section section-bg'>
      <div class='container' data-aos='fade-up'>
        <div class='section-title'>
          <h2>Team</h2>
          <p>
            ProGcc helps businesses grow by assuring their marketing budget is
            invested in the right places, managed by the right experts and
            increasingly generates sales & profit.
          </p>
        </div>

        <div class='row'>
          <Member
            name='Walter White'
            designation='Chief Executive Officer'
            image='/images/team/team-1.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='Sarah Jhonson'
            designation='Product Manager'
            image='/images/team/team-2.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='William Anderson'
            designation='CTO'
            image='/images/team/team-3.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
          <Member
            name='Amanda Jepson'
            designation='Accountant'
            image='/images/team/team-4.jpg'
            facebook='/'
            instagram='/'
            twitter='/'
            linkedIn='/'
          />
        </div>
      </div>
    </div>
  )
}

export default team
