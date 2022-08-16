import React, { memo } from 'react'

import ServiceTitle from '../serviceSection/serviceTitle'
import ParagraphText from '../heroSection/paragraphText'
import ContactSectionStyle from './style'
import FormField from './formField.js'
import PrimaryButton from '../buttons'

const ContactSection = memo(() => {
  return (
    <ContactSectionStyle id='contact'>
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_info">
            <ServiceTitle className="contact_title">保持联系</ServiceTitle>
            <ParagraphText className="contact_subtitle">我们很想听到您的声音.</ParagraphText>
          </div>
          <div className="contact_form">
            <FormField
              className="contact_field_fullWidth"
              type="text"
              label="姓名"
              name="name"
              id="name"
              required
            />
            <FormField
              type="email"
              label="电子邮件"
              name="email"
              id="email"
              required
            />
            <FormField
              type="text"
              label="主题"
              name="subject"
              id="subject"
              required
            />
            <FormField
              className="contact_field_fullWidth"
              type="text"
              label="信息"
              name="message"
              id="message"
              rows="6"
              required
            />
            <PrimaryButton
              type="submit"
              buttonType="button"
              className="button contact_submit"
            >
              提交
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  )
})

export default ContactSection