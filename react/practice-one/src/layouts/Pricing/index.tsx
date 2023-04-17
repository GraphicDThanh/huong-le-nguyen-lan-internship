import { PricingCard } from 'components/PricingCard';
import { Typography } from 'components/Typography';
import { listPricing } from 'constants/listData';
import './index.css';

const Pricing = () => {
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
          {listPricing.map((item) => (
            <PricingCard
              key={item.id}
              title={item.title}
              status={item.status}
              name={item.name}
              price={item.price}
              listItem={item.listItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Pricing };
