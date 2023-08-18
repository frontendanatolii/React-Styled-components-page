import React from 'react'
import flareIcon from '../../images/flare.svg';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <div className={classes.contact}>
      <img src={flareIcon} alt="flare" />
      <h2 className={classes.contact_title}>Great Match!</h2>
      <div>
        <h3 className={classes.contact_firstDescr}>Ogilvy is a great match for your business!</h3>
        <p className={classes.contact_secondDescr}>Get in touch and feel free to ask any questions you might have.</p>
      </div>
      <form className={classes.contact_form}>
        <textarea
          cols="30"
          rows="10"
          className={classes.contact_form_textarea}
        >
          Hello, I'm interested in working with you on our social campaigns...
        </textarea>
        <button className='contact_button'>Contact Ogilvy</button>
      </form>
    </div>
  )
}
