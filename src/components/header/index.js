import React, { memo, useState } from 'react'
import { Link } from 'react-scroll';

import HeaderStyle from './style';
import Logo from './logo';
import { FiMenu, FiX } from 'react-icons/fi';

import ThemeSwitcher from '../themeSwitcher';

const Header = memo(() => {
  const [isNavOpen, setNavOpen] = useState(false)

  return (
    <HeaderStyle>
      <div className="container">
        <div className="navigation">
          <Link to='home' smooth>
            <Logo />
          </Link>
          <div className="navMenu">
            <nav className={isNavOpen ? 'open' : ''}>
              {isNavOpen ? <div className="closeIcon" onClick={e => setNavOpen(false)} onKeyDown={e => setNavOpen(false)}>
                <FiX />
              </div> : <></>}
              <ul>
                <li>
                  <Link to='home' smooth>首页</Link>
                </li>
                <li>
                  <Link to='service' smooth>服务</Link>
                </li>
                <li>
                  <Link to='about' smooth>关于</Link>
                </li>
                <li>
                  <Link to='contact' smooth>联系</Link>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
            <div className="menuIcon" onClick={e => setNavOpen(true)}>
              <FiMenu />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
})

export default Header