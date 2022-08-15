import React, { memo } from 'react'
import ParagraphText from '../../heroSection/paragraphText';
import ServiceItemStyle from './style';

const ServiceItem = memo(({ icon, title, desc }) => {
  return (
    <ServiceItemStyle>
      <div className="service-icon">{icon}</div>
      <div className="service-title">{title}</div>
      <ParagraphText className="service-desc">{desc}</ParagraphText>
    </ServiceItemStyle>
  )
})

export default ServiceItem