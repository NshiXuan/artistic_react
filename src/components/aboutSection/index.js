import React, { memo } from 'react'

import AboutImg from '../../assets/images/about.png';
import PrimaryButton from '../buttons';
import ParagraphText from '../heroSection/paragraphText';
import ServiceTitle from '../serviceSection/serviceTitle';
import AboutSectionStyle from './style'

const AboutSection = memo(() => {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about_wrapper">
          <div className="about_img">
            <img src={AboutImg} alt="Artistic" />
          </div>
          <div className="about_info">
            <ParagraphText className="about_subtitle">我们是谁</ParagraphText>
            <ServiceTitle className="about_title">捕捉生活的细节</ServiceTitle>
            <ParagraphText className="about_desc">“艺术”是一些充满激情的摄影师的工作室。我们的目标是捕捉您的体验。</ParagraphText>
            <PrimaryButton className="button">保持联系</PrimaryButton>
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  )
})

export default AboutSection