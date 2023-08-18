import React from 'react'
import classes from './Reviews.module.css';
import { ResponsePreview } from '../ResponsePreview/ResponsePreview';
import smallLogo from '../../images/smallLogo.svg';
import googleIcon from '../../images/googleColorIcon.svg';
import facebookIcon from '../../images/facebook_square.svg';
import newCIcon from '../../images/New_C_icon.svg';
import { ReviewCard } from '../ReviewCard/ReviewCard';

export function Reviews() {
  return (
    <div className={classes.review}>
      <header className={classes.review_header}>
        <h1>
          AgencyVista Reviews
        </h1>
        <button className='contact_button'>Submit Review</button>
      </header>
      <ResponsePreview />
      <div className={classes.review_info}>
        <p>2,462 Reviews</p>
        <div className={classes.icons}>
          <img src={smallLogo} alt="" />
          <img src={googleIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={newCIcon} alt="" />
        </div>
        <p>Most recent</p>
      </div>
      <ReviewCard />
    </div>
  )
}
