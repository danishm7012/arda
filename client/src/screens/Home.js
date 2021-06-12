import About from '../components/about/About'
import Count from '../components/count/count'
import Contact from '../components/contact/contactUs'
import Team from '../components/team/team'

import Hero from '../components/hero/Hero'
import Meta from '../components/common/Meta'
import React from 'react'
import SocailShare from '../components/socialShare/Share'

const Home = () => {
  return (
    <>
      <SocailShare />
      <Meta />
      <Hero />
      <About />
      <Count />
      <Team />
      <Contact />
    </>
  )
}

export default Home
