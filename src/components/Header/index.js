import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/Logo.jpg';

const Header = () => {
  return (
    <header>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
