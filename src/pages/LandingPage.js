import React, { memo } from 'react'
import AboutSection from '../components/aboutSection'

import Header from '../components/header'
import HeroSection from '../components/heroSection'
import ServiceSection from '../components/serviceSection'

const LandingPage = memo(() => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
    </div>
  )
})

export default LandingPage