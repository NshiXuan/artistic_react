import React, { memo } from 'react'
import ParagraphTextStyle from './style'

const ParagraphText = memo(({ children, ...rest }) => {
  return (
    <ParagraphTextStyle {...rest}>{children}</ParagraphTextStyle>
  )
})

export default ParagraphText