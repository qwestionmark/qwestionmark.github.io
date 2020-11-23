import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://en.wikipedia.org/wiki/Infinite_monkey_theorem" target="_blank" className="image avatar">
        <img src={avatar} alt="It's my noggin" />
      </a>
      <h1>
        <strong>Hi, I'm Trevor, a...</strong>
        <br />
        Programmer
        <br />
        Teacher
        <br />
        Writer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
