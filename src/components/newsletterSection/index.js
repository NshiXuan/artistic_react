import React, { memo } from 'react'

import ServiceTitle from '../serviceSection/serviceTitle'
import ParagraphText from '../heroSection/paragraphText'
import NewsletterSectionStyle from './style'

const NewsletterSection = memo(() => {
  return (
    <NewsletterSectionStyle>
      <div className="container">
        <div className="newsletter_wrapper">
          <ServiceTitle className="newsletter_title">加入时事通讯</ServiceTitle>
          <ParagraphText className="newsletter_subtitle">每周获得定期更新</ParagraphText>
          <form className="newsletter_form">
            <input type="email" placeholder='输入你的电子邮箱' />
            <button type='submit' className='button'>加入</button>
          </form>
        </div>
      </div>
    </NewsletterSectionStyle>
  )
})

export default NewsletterSection