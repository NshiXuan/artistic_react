import React, { memo } from 'react'
import AboutSection from '../components/aboutSection'
import ContactSection from '../components/contactSection'
import Footer from '../components/footer'

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
      <ContactSection />
      <Footer />
    </div>
  )
})

export default LandingPage