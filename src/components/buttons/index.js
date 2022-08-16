import React, { memo } from 'react'
import PrimaryButtonStyle from './style'

const PrimaryButton = memo(({ children, buttonType, ...rest }) => {
  return (
    <PrimaryButtonStyle as={buttonType} {...rest}>{children}</PrimaryButtonStyle>
  )
})

export default PrimaryButton