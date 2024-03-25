import React from 'react'
import "./common.css"
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <div uk-sticky = "start: 120; animation: uk-animation-top  ; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; end: ! *; offset: 0" className='navbar  ' >
      <div className='logo' ><img width= {300} src='images/logo.jpeg'/>  </div>
      <div className='nav'>
        <ul>
            <li><Link to='ss' offset={-140} smooth = 'true' duration={1000} spy = 'true' > <p> Home </p>  </Link>  </li>
            <li><Link to='sd' offset={-110} smooth = 'true' duration={1000} spy = 'true' > <p>About</p>  </Link>  </li>
            <li><Link> <p>Services</p>  </Link>  </li>
            <li><Link> <p>Contact</p>  </Link>  </li>
        </ul>

      </div>
    </div>
  )
}

export default Header
