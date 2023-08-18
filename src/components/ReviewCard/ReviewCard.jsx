import React from 'react';
import starIcon from '../../images/starIcon.svg';
import facebookLogo from '../../images/facebookNonColor.svg';
import girlPhoto from '../../images/girlImage.png';
import company from '../../images/companyEmployee.png';
import classes from './ReviewCard.module.css';

export function ReviewCard() {
  return (
    <div className={classes.card}>
      <div className={classes.card_hero}>
        <div className={classes.card_stars}>
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
        </div>
        <img src={facebookLogo} alt="" />
      </div>
      <p className={classes.card_title}>Supervisors and mentors were incredibly willing to sit down and walk me through various parts of the job.</p>
      <div className={classes.card_user}>
        <div className={classes.card_user_info}>
          <img src={girlPhoto} alt="" className={classes.user_image} />
          <h2 className={classes.user_name}>Nathan Fox</h2>
        </div>
        <p className={classes.card_review_date}>November 14, 2018</p>
      </div>
      <hr />
      <div className={classes.card_company}>
        <p className={classes.card_company_answer}>Thanks for the review Nathan - it's been a great time working with you!</p>
        <div className={classes.card_user}>
          <div className={classes.card_user_info}>
            <img src={company} alt="" className={classes.user_image} />
            <div>
              <h2 className={classes.user_name}>Kevin Alice</h2>
              <p className={classes.card_review_date}>CEO at TYME Marketing</p>
            </div>
          </div>
          <p className={classes.card_review_date}>November 14, 2018</p>
        </div>
      </div>
    </div>
  )
}
