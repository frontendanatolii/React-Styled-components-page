import React from 'react'
import classes from './Reviews.module.css';
import { ResponsePreview } from '../ResponsePreview/ResponsePreview';
import smallLogo from '../../images/smallLogo.svg';
import googleIcon from '../../images/googleColorIcon.svg';
import facebookIcon from '../../images/facebook_square.svg';
import newCIcon from '../../images/New_C_icon.svg';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import girlPhoto from '../../images/girlImage.png';
import company from '../../images/companyEmployee.png';

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
      <div className={classes.responses}>
        <ReviewCard
          socialImg={facebookIcon}
          reviewText='Supervisors and mentors were incredibly willing to sit down and walk me through various parts of the job.'
          userPhoto={girlPhoto}
          userName='Nathan Fox'
          date='November 14, 2018'
          companyResponse={{
            text: 'Thanks for the review Nathan - it\'s been a great time working with you!',
            name: 'Kevin Alice',
            position: 'CEO at TYME Marketing',
            photo: company,
            date: 'November 14, 2018'
          }}
        />
        <ReviewCard
          socialImg={googleIcon}
          reviewText='For a creative agency, the culture is extremely corporate. The umbrella of WPP stifles culture and adds endless red-tape and restrictions to how we do business. The technology we use every day is deplorable, as is the outsourced support. The company approach to delivering technology solutions to clients is outdated, lacking in innovation, and marginalized compared to other practices.'
          userPhoto={girlPhoto}
          userName='Serenity Richards'
          date='February 25, 2017'
          companyResponse={{
            text: 'Thanks for the review Nathan - it\'s been a great time working with you!',
            name: 'Kevin Alice',
            position: 'CEO at TYME Marketing',
            photo: company,
            date: 'November 14, 2018'
          }}
        />
        <ReviewCard
          socialImg={facebookIcon}
          reviewText='Supervisors and mentors were incredibly willing to sit down and walk me through various parts of the job.'
          userPhoto={girlPhoto}
          userName='Nathan Fox'
          date='November 14, 2018'
        />
        <ReviewCard
          socialImg={googleIcon}
          reviewText='For a creative agency, the culture is extremely corporate. The umbrella of WPP stifles culture and adds endless red-tape and restrictions to how we do business. The technology we use every day is deplorable, as is the outsourced support. The company approach to delivering technology solutions to clients is outdated, lacking in innovation, and marginalized compared to other practices.'
          userPhoto={girlPhoto}
          userName='Serenity Richards'
          date='February 25, 2017'
        />
      </div>
    </div>
  )
}
