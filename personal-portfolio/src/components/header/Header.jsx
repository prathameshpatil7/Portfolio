import React from 'react'
import CTA from './CTA'
import './header.scss'
import ME from '../../assets/images/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Prathamesh Patil</h1>
            <h5 className='text-light'>Front End Developer</h5>
            <CTA />

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll-down'>Scroll Down</a>
            <HeaderSocial />
        </div>
    </header>
  )
}

export default Header