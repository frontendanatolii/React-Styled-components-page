import React from 'react'
import { Card } from '../Card/Card'
import companyIcon from '../../images/companyIcon.svg';
import classes from './Summary.module.css';
import locationIcon from '../../images/location_searchIcon.svg';
import mapIcon from '../../images/map_outlinedIcon.svg';
import globeIcon from '../../images/globeIcon.svg';
import messageIcon from '../../images/comment_text_outlinedIcon.svg';
import brushIcon from '../../images/brushIcon.svg';
import dollarIcon from '../../images/dollar_outlinedIcon.svg';
import { Contact } from '../Contact/Contact';
import { AgencyCard } from '../AgencyCard/AgencyCard';
import operamIcon from '../../images/operam.svg';
import bbdoIcon from '../../images/bbdo.svg';
import lyfeIcon from '../../images/lyfe.svg';

export function Summary() {
  return (
    <div className={classes.container}>
      <div className={classes.summary}>
        <Card
          icon={companyIcon}
        title={'Client Size'}
        description={'View all the business sizes this agency current manages, as well as which business size they choose to work with the most.'}
        chartBars={
          [
            {
              value: 0,
              maxValue: 100,
              label: 'Small business (Less than $1M)'
            },
            {
              value: 10,
              maxValue: 100,
              label: 'Medium business ($1M–$10M)'
            },
            {
              value: 60,
              maxValue: 100,
              label: 'Large business ($10M–$1B)'
            },
            {
              value: 20,
              maxValue: 100,
              label: 'Enterprise (+$1B)'
            }
          ]
        }
        footerTitle={'Nice!'}
          footerDescription={'Ogilvy is managing businesses of a similar size to yours.'}
        />
        <Card
          icon={locationIcon}
        title={'Industry focus'}
        description={'See which industries this agency has the most experience and expertise in.'}
        chartBars={
          [
            {
              value: 50,
              maxValue: 100,
              label: 'Healthcare'
            },
            {
              value: 30,
              maxValue: 100,
              label: 'Business Services'
            },
            {
              value: 10,
              maxValue: 100,
              label: 'Automotive'
            },
            {
              value: 10,
              maxValue: 100,
              label: 'Financial Services'
            }
          ]
        }
        footerTitle={'Things are looking good!'}
          footerDescription={'Ogilvy has experience working with the same type of business as yours.'}
        />
        <Card
          icon={mapIcon}
          title={'Client Locations'}
          description={'Check out where Ogilvy\'s clients are based thorough the world.'}
          chartBars={
            [
              {
                value: 50,
                maxValue: 100,
                label: 'USA'
              },
              {
                value: 20,
                maxValue: 100,
                label: 'Canada'
              },
              {
                value: 10,
                maxValue: 100,
                label: 'Australia'
              },
              {
                value: 5,
                maxValue: 100,
                label: 'Great Britain'
              },
              {
                value: 15,
                maxValue: 100,
                label: 'Other'
              }
            ]
          }
          footerTitle={'Well would you look at that!'}
          footerDescription={'Ogilvy works with clients and client audiences in the same location as yours.'}
        />
        <Card
          icon={globeIcon}
          title={'Networks'}
          description={'View all of the social networks this agency currently manages, as well as which networks they work with the most.'}
          chartBars={
            [
              {
                value: 50,
                maxValue: 100,
                label: 'Facebook'
              },
              {
                value: 20,
                maxValue: 100,
                label: 'Twitter'
              },
              {
                value: 10,
                maxValue: 100,
                label: 'Instagram'
              },
              {
                value: 5,
                maxValue: 100,
                label: 'LinkedIn'
              },
              {
                value: 15,
                maxValue: 100,
                label: 'YouTube'
              }
            ]
          }
          footerTitle={'Well would you look at that!'}
          footerDescription={'Ogilvy works with clients and client audiences in the same location as yours.'}
        />
        <Card
          icon={messageIcon}
          title={'Language'}
          description={'Check out where Ogilvy\'s clients are based thorough the world.'}
          chartBars={
            [
              {
                value: 80,
                maxValue: 100,
                label: 'English'
              },
              {
                value: 20,
                maxValue: 100,
                label: 'Spanish'
              }
            ]
          }
          footerTitle={'Well would you look at that!'}
          footerDescription={'Ogilvy works with clients and client audiences in the same location as yours.'}
        />
        <Card
          icon={brushIcon}
          title={'Services Offered'}
          description={'View all of the social networks this agency currently manages, as well as which networks they work with the most.'}
          chartBars={
            [
              {
                value: 50,
                maxValue: 100,
                label: 'Socia Media Management'
              },
              {
                value: 20,
                maxValue: 100,
                label: 'Email Marketing'
              },
              {
                value: 10,
                maxValue: 100,
                label: 'Graphic Design'
              },
              {
                value: 5,
                maxValue: 100,
                label: 'Visual Identity'
              },
              {
                value: 15,
                maxValue: 100,
                label: 'Leads Generation'
              }
            ]
          }
          footerTitle={'Awesome!'}
          footerDescription={'Ogilvy is managing networks that fit your needs.'}
        />
        <Card
          icon={dollarIcon}
          title={'Budgets and pricing'}
          description={'Here\'s what budgets Ogilvy works with, as well as some additional pricing info you might like to know.'}
          chartBars={
            [
              {
                value: 5,
                maxValue: 100,
                label: 'Up to $500/mo'
              },
              {
                value: 12,
                maxValue: 100,
                label: '$500 - $1k/mo'
              },
              {
                value: 28,
                maxValue: 100,
                label: '$1k - $10k /mo'
              },
              {
                value: 44,
                maxValue: 100,
                label: '$10k - $100k / mo'
              },
              {
                value: 32,
                maxValue: 100,
                label: '$100k+ / mo'
              }
            ]
          }
          footerTitle={'Awesome!'}
          footerDescription={'Ogilvy is managing networks that fit your needs.'}
        />
      </div>
      <Contact />

      <h2 className={classes.title}>Similar Agencies</h2>
      <p className={classes.description}>
        Discover similar agencies you might also like, <br />
        before making the big decision.
      </p>

      <div className={classes.agency}>
        <AgencyCard logo={operamIcon} title={'Operam'} description={'Augmenting teams through tech and automation.'} />
        <AgencyCard logo={lyfeIcon} title={'LYFE Marketing'} description={'A leading social media management company that helps businesses grow online.'} />
        <AgencyCard logo={bbdoIcon} title={'BBDO'} description={'BBDO is a worldwide advertising agency network, with its headquarters in New York City.'} />
      </div>
    </div>
  )
}
