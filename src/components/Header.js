import React from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as ProfilePicture } from '../svg/profile_pic.svg';

const Header = () => {
  return (
    <div className="headerContainer">
        <Logo/>
        <div className="picContainer">
            <ProfilePicture/>
        </div>
    </div>
  )
}

export default Header