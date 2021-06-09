import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ARDA | Home',
  description:
    'To help customers add value to their business by leveraging the power of digital.',
  keywords: 'cloud services, DevOps, consultancy',
}

export default Meta
