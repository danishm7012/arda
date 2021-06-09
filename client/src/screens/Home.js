import About from '../components/about/About'
import Contact from '../components/contact/Contact'
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
      <Contact />
    </>
  )
}

export default Home
