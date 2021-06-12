import React from 'react'

const member = ({
  name,
  image,
  designation,
  facebook,
  instagram,
  twitter,
  linkedIn,
}) => {
  return (
    <div class='col-lg-3 col-md-6 d-flex align-items-stretch'>
      <div class='member' data-aos='fade-up' data-aos-delay='100'>
        <div class='member-img'>
          <img src={image} class='img-fluid' alt={name} />
          <div class='social'>
            <a href={twitter}>
              <i className='fab fa-twitter'></i>
            </a>
            <a href={facebook}>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href={instagram}>
              <i className='fab fa-instagram'></i>
            </a>
            <a href={linkedIn}>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
        </div>
        <div class='member-info'>
          <h4>{name}</h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default member
