import React from 'react';
import SocialShare from './SocialShare';

const Footer = () => {
  return (
    <footer className="bq-section bq-footer">
        <div className="bq-wrapper">
          <div className="bq-footer__content">
            <p><strong>&copy; Bryan Aldrin E. Quinalayo 2018</strong></p>
            <SocialShare />
          </div>
        </div>
      </footer>
  );
};

export default Footer;