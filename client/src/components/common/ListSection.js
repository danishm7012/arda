import React from 'react'

const ListSection = ({ title, paragraph, list }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {paragraph && <p>{paragraph}</p>}
    </div>
  )
}

export default ListSection
