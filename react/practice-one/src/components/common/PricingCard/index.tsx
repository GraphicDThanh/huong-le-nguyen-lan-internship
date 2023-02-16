import { List } from '../List';
import CircleCheckFill from 'assets/icons/circle-check-fill.svg';
import CircleCheck from 'assets/icons/circle-check.svg';
import './index.css';
import { Button } from '../Button';

const PricingCard = () => {
  const listItem = [
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheck,
      title: '1GB  Cloud storage',
    },
    {
      image: CircleCheck,
      title: 'Email and community support',
    },
  ];

  return (
    <div className='pricing-card'>
      <div className='card-status'>
        <span className='status'>New</span>
      </div>
      <div className='card-header'>
        <p className='card-title'>FREE</p>
        <p className='card-name'>Organize across all apps by hand</p>
      </div>
      <div className='card-price'>
        <p className='price'>0</p>
        <div className='unit-and-month'>
          <p className='unit'>$</p>
          <p className='month'>Per Month</p>
        </div>
      </div>
      <div className='card-list'>
        <List image={CircleCheckFill} size='md' listItem={listItem} />
      </div>
      <div className='card-action'>
        <Button variant='tertiary' size='lg' />
      </div>
    </div>
  );
};

export { PricingCard };
