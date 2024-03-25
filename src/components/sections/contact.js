import React from 'react';

const Contact = () => {
  return (
    <div className='uk-flex uk-flex-column uk-flex-middle ' style={{ minHeight: '500px' }}>
      <h1>Contact Us</h1>
      <form className="uk-form-stacked uk-width-medium" style={{ backgroundColor:"white" }} uk-grid="">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="name">Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="name" type="text" placeholder="Your Name" />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="email">Email</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="email" type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="message">Message</label>
          <div className="uk-form-controls">
            <textarea className="uk-textarea" id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

