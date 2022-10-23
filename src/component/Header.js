import React from 'react';
import zooLogo from '../assets/zoo_animals.png';
import HeaderStyles from './HeaderStyles.module.css';

const Header = () => (
  <header className={HeaderStyles.header}>
    <img src={zooLogo} className={HeaderStyles.logo} alt="" />
    <div className={HeaderStyles.heading}>
      <h1 className={HeaderStyles.header_text}>ZOO Animals</h1>
      <p className={HeaderStyles.secText}>All animal types</p>
    </div>
  </header>
);

export default Header;
