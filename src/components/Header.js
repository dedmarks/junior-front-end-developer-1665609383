import React from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg';

const Header = () => {
  return (
    <div className="headerContainer">
        <Logo/>
        <div className="picContainer">
            <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" alt="avatar"/>
        </div>
    </div>
  )
}

export default Header