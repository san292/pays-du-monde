import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="./img/logo192.png" alt="logo" />
      </Link>
      <h3> React World</h3>
    </div>
  );
};

export default Logo;
