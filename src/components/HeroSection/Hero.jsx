import React from 'react'
import bigLogo from "../../images/bigLogo.svg";
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero}>
      <img src={bigLogo} alt="our big logo" className={classes.hero_logo} />
      <div className={classes.hero_info}>
        <h3 className={classes.hero_title}>Ogilvy</h3>
        <p className={classes.hero_subtitle}>10 years · New York</p>
        <div className={classes.hero_links}>
          <a href="/" className={classes.hero_link}>Design</a>
          <a href="/" className={classes.hero_link}>Marketing</a>
          <a href="/" className={classes.hero_link}>Email</a>
          <a href="/" className={classes.hero_link}>Social Media Management</a>
          <a href="/" className={classes.hero_link}>Video Production</a>
        </div>
        <p className={classes.hero_description}>
          In the beginning, there was one Ogilvy, the company founded by David Ogilvy in 1948.
          Today, there is again one Ogilvy, in 83 countries and 132 offices. We are one doorway to a creative network,
          re-founded to make brands matter in a complex, noisy, hyper-connected world.
        </p>
        <button className='contact_button'>Contact Ogilvy</button>
      </div>
    </div>
  )
}
