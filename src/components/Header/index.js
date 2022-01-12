import React from 'react';
import logo from '../../../images/logo.svg';
import card from '../../../images/icon-cart.svg';
import avatar from '../../../images/image-avatar.png';

import './style.scss';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list-item">Collections
          </li>
          <li className="header__nav__list-item">Men
          </li>
          <li className="header__nav__list-item">Women
          </li>
          <li className="header__nav__list-item">About
          </li>
          <li className="header__nav__list-item">Contact
          </li>
        </ul>
      </nav>
      <div className="header__client">
        <div className="header__client__caddie">
          <img src={card} alt="" />
        </div>
        <div className="header__client__profil">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
