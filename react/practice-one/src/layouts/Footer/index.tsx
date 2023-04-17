import { List } from 'components/List';
import { Typography } from 'components/Typography';
import { Image } from 'components/Image';
import './index.css';

import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Twitter from 'assets/icons/twitter.svg';
import Youtube from 'assets/icons/youtube.svg';
import FacebookPC from 'assets/icons/facebook-pc.svg';
import InstagramPC from 'assets/icons/instagram-pc.svg';
import TwitterPC from 'assets/icons/twitter-pc.svg';
import { listMenuFooter } from 'constants/listData';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='footer-list'>
          {listMenuFooter.map((item) => (
            <List
              key={item.id}
              listItem={item.listItem}
              listTitle={item.title}
              tagName='a'
              weight='medium'
            />
          ))}
        </div>
      </div>
      <div className='footer-credit'>
        <div className='container'>
          <Typography
            text='Made With Love By Figmaland All Right Reserved'
            size='nor'
            weight='semiBold'
          />
          <div className='list-social-icons primary-icons'>
            <Image image={Facebook} alt='icon facebook' size='sm' href='javascript:void(0)' />
            <Image image={Instagram} alt='icon instagram' size='sm' href='javascript:void(0)' />
            <Image image={Twitter} alt='icon twitter' size='sm' href='javascript:void(0)' />
            <Image image={Youtube} alt='icon youtube' size='sm' href='javascript:void(0)' />
          </div>
          <div className='list-social-icons secondary-icons'>
            <Image image={FacebookPC} alt='icon facebook' size='sm' href='javascript:void(0)' />
            <Image image={InstagramPC} alt='icon instagram' size='sm' href='javascript:void(0)' />
            <Image image={TwitterPC} alt='icon twitter' size='sm' href='javascript:void(0)' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
