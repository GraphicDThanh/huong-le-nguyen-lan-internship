import { List } from '../List';
import './index.css';
import { Button } from '../Button';
import { ListItemProps } from '../ListItem';

interface Props {
  status?: 'new';
  title?: string;
  name?: string;
  price?: string;
  listItem: ListItemProps[];
}

const PricingCard = ({ status, title, name, price = '0', listItem }: Props) => {
  return (
    <div className='pricing-card'>
      {status && (
        <div className='card-status'>
          <span className='status'>New</span>
        </div>
      )}
      <div className='card-header'>
        <p className='card-title'>{title}</p>
        <p className='card-name'>{name}</p>
      </div>
      <div className='card-price'>
        <p className='price'>{price}</p>
        <div className='unit-and-month'>
          <p className='unit'>$</p>
          <p className='month'>Per Month</p>
        </div>
      </div>
      <div className='card-list'>
        <List size='md' listItem={listItem} tagName='p' />
      </div>
      <div className='card-action'>
        <Button variant='tertiary' size='xxl' title='Try for free' />
      </div>
    </div>
  );
};

export { PricingCard };
