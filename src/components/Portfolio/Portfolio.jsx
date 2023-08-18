import React from 'react'
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';
import deutchBankLogo from '../../images/deutchBankLogo.svg';
import bankFacebookPost from '../../images/bankFacebookPost.svg';
import intercomLogo from '../../images/intercomLogo.svg';
import intercomPost from '../../images/intercomPost.svg';
import classes from './Portfolio.module.css';
import productBoardLogo from '../../images/productBoardLogo.svg';
import productBoardPost from '../../images/productBoardPost.svg';
import figmaLogo from '../../images/figmaLogo.svg';
import figmaPost from '../../images/figmaPost.svg';

export function Portfolio() {
  return (
    <div className={classes.portfolio}>
      <PortfolioCard
        logo={deutchBankLogo}
        name='Deutsche Bank'
        field='Financial services · $1B–$10B'
        description='Leading digital campaign focused on acquisition of private equity clients in Switzeralnd.'
        postPhoto={bankFacebookPost}
      />
      <PortfolioCard
        logo={intercomLogo}
        name='Intercom'
        field='Internet services · $1B–$10B'
        description='Helping company build effective acquisition funnel of newly launched feature Product Tours. Also enabling them to explore and reach new p...'
        postPhoto={intercomPost}
      />
      <PortfolioCard
        logo={productBoardLogo}
        name='Productboard'
        field='Internet services · $1B–$10B'
        description='We led the digital campaign focused on acquisition of private equity clients in Switzerland.'
        postPhoto={productBoardPost}
      />
      <PortfolioCard
        logo={figmaLogo}
        name='Figma'
        field='Internet services · $1B–$10B'
        description='We helped Figma to build effective acquisition funnel of newly launched feature Product Tours. Also enabling them to explore and reach new potential customers in european segment of... Read more'
        postPhoto={figmaPost}
        readMore='We helped Figma to build effective acquisition funnel of newly launched feature Product Tours. Also enabling them to explore and reach new potential customers in european segment of emerging startups who are just building out their design teams. We helped Figma to build effective acquisition funnel of newly launched feature Product Tours. Also enabling them to explore and reach new potential customers in european segment of emerging startups who are just building out their design teams.'
      />
    </div>
  )
}
