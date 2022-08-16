import React, { memo } from 'react'
import FormFiledStyle from './style'

const FormField = memo(({ label, id, rows = 1, className, ...rest }) => {
  return (
    <FormFiledStyle className={className}>
      <label htmlFor={id}>
        {label}
        {rows <= 1 ? (
          <input id={id} {...rest} />
        ) : (
          <textarea id={id} rows={rows} {...rest} />
        )}
      </label>
    </FormFiledStyle>
  )
})

export default FormField