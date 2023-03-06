import './index.css';
import LogoIcon from 'assets/icons/logo.svg';
import Search from 'assets/icons/search.svg';
import Bar from 'assets/icons/bar.svg';
import HaftBar from 'assets/icons/haft-bar.svg';
import Cart from 'assets/icons/cart.svg';
import Arrow from 'assets/icons/arrow-right.svg';

import { Image } from 'components/Image';
import { Logo } from 'components/Logo';
import { useState } from 'react';
import { List } from 'components/List';
import { Button } from 'components/Button';
import { listMenuHeader } from 'constants/listData';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className='header-wrapper'>
      <div className='container'>
        <div className='header-nav'>
          <Logo logo={LogoIcon} href='#' />
          <div className='nav-mobile'>
            <Image image={Search} alt='icon search' size='sm' pointer={true} />
            <Image image={Cart} alt='icon cart' size='sm' pointer={true} />
            <Image
              image={menu ? HaftBar : Bar}
              alt='icon bar'
              size='sm'
              pointer={true}
              onClick={openMenu}
            />
          </div>
          <div className='nav-pc nav-content'>
            <List listItem={listMenuHeader} tagName='a' classList='list-menu' weight='medium' />
            <div className='btn-authentication'>
              <Button as='a' title='Login' variant='quaternary' href='#' />
              <Button variant='tertiary' size='md'>
                Become a member
                <Image image={Arrow} alt='icon arrow' size='xxs' pointer={true} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {menu && <List listItem={listMenuHeader} tagName='a' classList='list-menu' />}
    </header>
  );
};

export { Header };
