import React, { memo } from 'react'

import PrimaryButton from '../buttons'
import HeroTitle from './heroTitle'
import ParagraphText from './paragraphText'
import HeroSectionStyle from './style'
import HeroImg from '../../assets/images/hero.png'

const HeroSection = memo(() => {
  return (
    <HeroSectionStyle>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-info">
            <HeroTitle className="hero-title">
              一点艺术的喜悦
            </HeroTitle>
            <ParagraphText className="hero-desc">
              因为每张照片都讲述了一个故事，所以让我们帮助您讲述您的故事.
            </ParagraphText>
            <PrimaryButton className="button">
              保持联系
            </PrimaryButton>
          </div>
          <div className="hero-img">
            <img src={HeroImg} alt="Artistic" />
          </div>
        </div>
      </div>
    </HeroSectionStyle>
  )
})

export default HeroSection