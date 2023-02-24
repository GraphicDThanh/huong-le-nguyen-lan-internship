import { PricingCard } from 'components/common/PricingCard';
import { Typography } from 'components/common/Typography';
import './index.css';

import CircleCheckFill from 'assets/icons/circle-check-fill.svg';
import CircleCheck from 'assets/icons/circle-check.svg';

const Pricing = () => {
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
    <div className='pricing-wrapper' id='pricing'>
      <div className='container'>
        <div className='pricing-title'>
          <Typography
            text='Pricing'
            tagName='h2'
            size='xl'
            weight='bold'
            classTypography='section-title'
          />
          <Typography
            text='Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics '
            classTypography='section-text'
            size='nor'
            weight='medium'
          />
        </div>
        <div className='pricing-content'>
          <PricingCard
            title='FREE'
            name='Organize across all apps by hand'
            price='0'
            listItem={listItem}
          />
          <PricingCard
            title='SILVER'
            name='Organize across all apps by hand'
            price='9.99'
            status='new'
            listItem={listItem}
          />
          <PricingCard
            title='GOLD'
            name='Organize across all apps by hand'
            price='19.99'
            listItem={listItem}
          />
        </div>
      </div>
    </div>
  );
};

export { Pricing };
