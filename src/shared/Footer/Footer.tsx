import React from 'react';
import './Footer.style.scss';

const Footer = () => (
  <div className="footer">
    <a
      href="https://github.com/Nastya-Ivanova"
      className="footer__github"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
    <span>2021</span>
    <a
      href="https://rs.school/js/"
      className="footer__rs-school"
      target="_blank"
      rel="noreferrer"
    >
      rs school
    </a>
  </div>
);

export default React.memo(Footer);
