import React, { memo } from 'react'
import HeroTitleStyle from './style'

const HeroTitle = memo(({ children, ...rest }) => {
  return (
    <HeroTitleStyle {...rest} > {children}</HeroTitleStyle >
  )
})

export default HeroTitle