import React, { memo } from 'react'
import { Link } from 'react-scroll'

import Logo from '../header/logo'
import ParagraphText from '../heroSection/paragraphText'
import FooterStyle from './style'

const Footer = memo(() => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer_wrapper">
          <Link to='home' smooth>
            <Logo className='footer_logo' />
          </Link>
          <ParagraphText className="footer_desc">
            “艺术”是一些充满激情的摄影师的工作室. 我们的目标是捕捉您的体验.
          </ParagraphText>
          <div className="footer_links">
            <Link to='home' smooth>首页</Link>
            <Link to='service' smooth>服务</Link>
            <Link to='about' smooth>关于</Link>
            <Link to='contact' smooth>联系</Link>
          </div>
          <ParagraphText className="footer_copyright">
            © 艺术创意{new Date().getFullYear()}. 版权所有
          </ParagraphText>
        </div>
      </div>
    </FooterStyle>
  )
})

export default Footer