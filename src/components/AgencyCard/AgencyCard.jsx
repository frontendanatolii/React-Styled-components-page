import React from 'react'
import arrowForward from '../../images/arrow_forward.svg';
import classes from './AgencyCard.module.css';

export function AgencyCard({ logo, title, description }) {
  return (
    <div className={classes.card}>
      <img src={logo} alt="" />
      <div className={classes.card_text}>
        <h2 className={classes.card_title}>{title}</h2>
        <p className={classes.card_description}>{description}</p>
      </div>
      <a href="#" className={classes.card_link}>
        <p>Open</p>
        <img src={arrowForward} alt="arrow forward" />
      </a>
    </div>
  )
}
