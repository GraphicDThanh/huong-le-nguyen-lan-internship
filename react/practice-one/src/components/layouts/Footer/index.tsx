import { List } from 'components/common/List';
import { Typography } from 'components/common/Typography';
import { Image } from 'components/common/Image';
import './index.css';

import Phone from 'assets/icons/phone.svg';
import Map from 'assets/icons/map.svg';
import Send from 'assets/icons/send.svg';
import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Twitter from 'assets/icons/twitter.svg';
import Youtube from 'assets/icons/youtube.svg';
import FacebookPC from 'assets/icons/facebook-pc.svg';
import InstagramPC from 'assets/icons/instagram-pc.svg';
import TwitterPC from 'assets/icons/twitter-pc.svg';

const Footer = () => {
  const listMenu = [
    {
      title: 'Company Info',
      listItem: [
        { title: 'About Us', href: 'javascript:void(0)' },
        { title: 'Carrier', href: 'javascript:void(0)' },
        { title: 'We are hiring', href: 'javascript:void(0)' },
        { title: 'Blog', href: 'javascript:void(0)' },
      ],
    },
    {
      title: 'Legal',
      listItem: [
        { title: 'About Us', href: 'javascript:void(0)' },
        { title: 'Carrier', href: 'javascript:void(0)' },
        { title: 'We are hiring', href: 'javascript:void(0)' },
        { title: 'Blog', href: 'javascript:void(0)' },
      ],
    },
    {
      title: 'Features',
      listItem: [
        { title: 'Business Marketing', href: 'javascript:void(0)' },
        { title: 'User Analytic', href: 'javascript:void(0)' },
        { title: 'Live Chat', href: 'javascript:void(0)' },
        { title: 'Unlimited Support', href: 'javascript:void(0)' },
      ],
    },
    {
      title: 'Resources',
      listItem: [
        { title: 'IOS & Android', href: 'javascript:void(0)' },
        { title: 'Watch a Demo', href: 'javascript:void(0)' },
        { title: 'Customers', href: 'javascript:void(0)' },
        { title: 'API', href: 'javascript:void(0)' },
      ],
    },
    {
      title: 'Get In Touch',
      listItem: [
        {
          title: '(480) 555-0103',
          href: 'tel:+(480)555-0103',
          image: Phone,
          size: 'sm' as 'sm',
        },
        {
          title: '4517 Washington Ave.',
          href: 'javascript:void(0)',
          image: Map,
          size: 'sm' as 'sm',
        },
        {
          title: 'debra.holt@example.com',
          href: 'mailto:debra.holt@example.com',
          image: Send,
          size: 'sm' as 'sm',
        },
      ],
    },
  ];

  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='footer-list'>
          {listMenu.map((item) => (
            <List listItem={item.listItem} listTitle={item.title} tagName='a' weight='medium' />
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
