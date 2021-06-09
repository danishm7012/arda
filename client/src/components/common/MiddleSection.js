import React from 'react'

const MiddleSection = ({ name, paragraph }) => {
  return (
    <div className='middle-section'>
      {name && <h2>{name}</h2>}
      {paragraph && <p>{paragraph}</p>}
    </div>
  )
}

export default MiddleSection
