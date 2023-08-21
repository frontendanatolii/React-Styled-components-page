import React from 'react';
import starIcon from '../../images/starIcon.svg';
import classes from './ReviewCard.module.css';

export function ReviewCard({ socialImg, reviewText, userPhoto, userName, date, companyResponse }) {
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
        <img src={socialImg} alt="" />
      </div>
      <p className={classes.card_title}>{reviewText}</p>
      <div className={classes.card_user}>
        <div className={classes.card_user_info}>
          <img src={userPhoto} alt="" className={classes.user_image} />
          <h2 className={classes.user_name}>{userName}</h2>
        </div>
        <p className={classes.card_review_date}>{date}</p>
      </div>
      {companyResponse
        ? (
          <>
            <hr />
            <div className={classes.card_company}>
              <p className={classes.card_company_answer}>{companyResponse.text}</p>
              <div className={classes.card_user}>
                <div className={classes.card_user_info}>
                  <img src={companyResponse.photo} alt="" className={classes.user_image} />
                  <div>
                    <h2 className={classes.user_name}>{companyResponse.name}</h2>
                    <p className={classes.card_review_date}>{companyResponse.position}</p>
                  </div>
                </div>
                <p className={classes.card_review_date}>{companyResponse.date}</p>
              </div>
            </div>
          </>
        ) : null 
      }
    </div>
  )
}
