import React from 'react';
import starIcon from '../../images/starIcon.svg';
import girlImage from '../../images/girlImage.png';
import classes from './ResponsePreview.module.css';
import nextArrow from '../../images/next_ui.svg';
import backArrow from '../../images/backArrow.svg';

export function ResponsePreview() {
  return (
    <div className={classes.preview}>
      <img src={backArrow} alt="" />
      <div className={classes.preview_info}>
        <div className={classes.preview_stars}>
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
        </div>
        <p className={classes.preview_description}>
          The Ogilvy marketing team is the best in the business you will find anywhere. They focus on your desired outcomes and work with you to achieve those aoutcomes and maximum success. They are consistent, driven, and a lot of FUN to partner with.
        </p>
        <div className={classes.preview_user}>
          <img src={girlImage} alt="" className={classes.preview_user_image} />
          <h2 className={classes.preview_user_name}>Kelly Figge</h2>
          <p className={classes.preview_user_position}>CEO at Adventures</p>
        </div>
      </div>
      <img src={nextArrow} alt="" />
    </div>
  )
}
