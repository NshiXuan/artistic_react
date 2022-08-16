import React, { memo } from 'react'
import AboutSection from '../components/aboutSection'

import Header from '../components/header'
import HeroSection from '../components/heroSection'
import NewsletterSection from '../components/newsletterSection'
import ServiceSection from '../components/serviceSection'
import TeamSection from '../components/teamSection'

const LandingPage = memo(() => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <NewsletterSection />
    </div>
  )
})

export default LandingPage