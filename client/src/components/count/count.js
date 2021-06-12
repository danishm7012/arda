import React from 'react'
import './count.css'

const count = () => {
  return (
    <section id='counts' class='counts'>
      <div class='container' data-aos='fade-up'>
        <div class='row'>
          <div class='col-lg-3 col-md-6'>
            <div class='count-box'>
              <i class='far fa-smile-beam'></i>
              <h4>232</h4>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class='col-lg-3 col-md-6 mt-5 mt-md-0'>
            <div class='count-box'>
              <i class='fas fa-journal-whills'></i>
              <h4>521</h4>
              <p>Projects</p>
            </div>
          </div>

          <div class='col-lg-3 col-md-6 mt-5 mt-lg-0'>
            <div class='count-box'>
              <i class='fas fa-headset'></i>
              <h4>1463</h4>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div class='col-lg-3 col-md-6 mt-5 mt-lg-0'>
            <div class='count-box'>
              <i class='fas fa-people-carry'></i>
              <h4>40</h4>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default count
