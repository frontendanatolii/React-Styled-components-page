import React from 'react'
import classes from './Card.module.css';
import { ChartBar } from '../ChartBar/ChartBar';

export function Card({ icon, title, description, chartBars, footerTitle, footerDescription }) {
  return (
    <div className={classes.card}>
      <img src={icon} alt="company" className={classes.card_icon} />
      <h2 className={classes.card_title}>{title}</h2>
      <p className={classes.card_description}>{description}</p>
      {chartBars.map(chartBar => (
        <ChartBar value={chartBar.value} maxValue={chartBar.maxValue} label={chartBar.label} />
      )) }
      <div className={classes.card_footer}>
        <div className={classes.card_footer_chartbar}></div>
        <div className={classes.card_footer_description}>
          <span>{footerTitle}</span>
          <span>{footerDescription}</span>
        </div>
      </div>
    </div>
  )
}
