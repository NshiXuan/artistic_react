import React, { memo } from 'react'

import Header from '../components/header'
import HeroSection from '../components/heroSection'
import ServiceSection from '../components/serviceSection'

const LandingPage = memo(() => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
    </div>
  )
})

export default LandingPage