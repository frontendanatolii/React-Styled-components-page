import React from 'react';
import googleLogo from '../../images/google.svg';
import facebookLogo from '../../images/facebook_square.svg';
import instaLogo from '../../images/instagramLogo.svg';
import linkedinLogo from '../../images/linkedin_square.svg';
import youtubeLogo from '../../images/youtube.svg';
import twitter from '../../images/twitter.svg';


import classes from './PortfolioCard.module.css';

export function PortfolioCard({ logo, name, field, description, postPhoto, readMore = '' }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__hero}>
        <img src={logo} alt="bank logo" />
        <div>
          <h3 className={classes.card__title}>{name}</h3>
          <p className={classes.card__subtitle}>{field}</p>
        </div>
      </div>
      {readMore.length
        ? (
          <span
            className={classes.card__description}
            title={readMore}
          >
            {description}
          </span>
        )
        : <h1 className={classes.card__description}>{description}</h1>
      }
      <p className={classes.card_profileText}>Managed Profiles</p>
      <div className={classes.card_profiles}>
        <img src={googleLogo} alt="google" />
        <img src={facebookLogo} alt="facebook" />
        <img src={instaLogo} alt="insta" />
        <img src={linkedinLogo} alt="linkedin" />
        <img src={twitter} alt="twitter" />
        <img src={youtubeLogo} alt="youtube" />
      </div>
      <img src={postPhoto} alt="" className={classes.card_post} />
    </div>
  )
}
