import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/Logo.jpg';

const Header = () => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo'>
          <img src={Logo} alt='logo' data-test='logoImage' />
        </div>
      </div>
    </header>
  );
};

export default Header;
