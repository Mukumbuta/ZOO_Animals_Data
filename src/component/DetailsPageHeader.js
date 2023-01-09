import React from 'react';
import { Link } from 'react-router-dom';
import backAccordion from '../assets/accordion_back.png';
import microphone from '../assets/microphone.png';
import settingsIcon from '../assets/settings_icon.svg';
import '../assets/detailsHeader.css';

function DetailsHeader() {
  return (
    <header className="detailsPageHeader">
      <Link to="/">
        <img src={backAccordion} className="header_img" alt="" />
      </Link>
      <div className="mic_settings">
        <Link to="/">
          <img src={microphone} className="header_img settings" alt="" />
        </Link>
        <Link to="/">
          <img src={settingsIcon} className="header_img" alt="" />
        </Link>
      </div>
    </header>
  );
}

export default DetailsHeader;
