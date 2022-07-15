import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <div className="header container">
        <Link
          to="/"
          className="header__logo-link"
        >
          <img
            className="header__logo"
            src="/images/logo.svg"
            alt="testtask logo"
          />
        </Link>
        <div>
          <button
            type="button"
            className="button header__button"
          >
            Users
          </button>
          <button
            type="button"
            className="button header__button"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
