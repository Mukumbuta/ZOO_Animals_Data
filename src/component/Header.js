import React from 'react';
import zooLogo from '../assets/shoal.png';
import HeaderStyles from './HeaderStyles.module.css';

const Header = () => (
  <header className={HeaderStyles.header}>
    <img src={zooLogo} className={HeaderStyles.logo} alt="" />
    <div className={HeaderStyles.heading}>
      <h1 className={HeaderStyles.header_text}>Aqua Nutri</h1>
      <p className={HeaderStyles.secText}>Fish Nutrition Data</p>
    </div>
  </header>
);

export default Header;
