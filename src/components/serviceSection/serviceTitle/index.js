import React, { memo } from 'react'
import ServiceTitleStyle from './style'

const ServiceTitle = memo(({ children, ...rest }) => {
  return (
    <ServiceTitleStyle {...rest}>{children}</ServiceTitleStyle>
  )
})

export default ServiceTitle