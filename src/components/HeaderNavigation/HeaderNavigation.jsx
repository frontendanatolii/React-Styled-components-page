import React from 'react'
import bigLogo from "../../images/bigLogo.svg";
import smallLogo from '../../images/smallLogo.svg';
import userImage from '../../images/userImage.png';
import backArrow from '../../images/backArrow.svg';
import classes from './HeaderNavigation.module.css';

export function HeaderNavigation() {
  return (
    <div className={classes.header_menu}>
      <div className={classes.header_menu_items}>
        <img src={smallLogo} alt="our small logo" />
        <button className={classes.header_menu_buttonLink}>
          <img src={backArrow} alt="back arrow" />
          Back to Results
        </button>
      </div>
      <img src={bigLogo} alt="our big logo" />
      <div className={classes.header_menu_items}>
        <button className='contact_button'>Contact Ogilvy</button>
        <img src={userImage} alt="current user" className={classes.header_user_image} />
      </div>
    </div>
  )
}
