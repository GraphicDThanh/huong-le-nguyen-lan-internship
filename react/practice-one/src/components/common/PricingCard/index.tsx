import { List } from '../List';
import './index.css';
import { Button } from '../Button';
import ListItemProps from 'interface/listItem';

interface Props {
  status?: 'new';
  title?: string;
  name?: string;
  price?: string;
  listItem: ListItemProps[];
}

const PricingCard = (props: Props) => {
  const { price = '0' } = props;

  return (
    <div className='pricing-card'>
      {props.status && (
        <div className='card-status'>
          <span className='status'>New</span>
        </div>
      )}
      <div className='card-header'>
        <p className='card-title'>{props.title}</p>
        <p className='card-name'>{props.name}</p>
      </div>
      <div className='card-price'>
        <p className='price'>{price}</p>
        <div className='unit-and-month'>
          <p className='unit'>$</p>
          <p className='month'>Per Month</p>
        </div>
      </div>
      <div className='card-list'>
        <List size='md' listItem={props.listItem} tagName='p' />
      </div>
      <div className='card-action'>
        <Button variant='tertiary' size='xl' title='Try for free' />
      </div>
    </div>
  );
};

export { PricingCard };
