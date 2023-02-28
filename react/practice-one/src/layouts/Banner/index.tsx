import './index.css';
import { Typography } from 'components/Typography';
import { Header } from '../Header';
import { Button } from 'components/Button';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <Header />
      <div className='banner'>
        <div className='filter-overlay'></div>
        <div className='banner-content container'>
          <Typography
            text='We Ensure A Best Insurance Service'
            weight='bold'
            classTypography='banner-title'
            tagName='h1'
          />
          <Typography
            text='We know how large objects will act, but things on a small scale just do not act that way.'
            statusText='primary-text'
            size='sm'
          />
          <Typography
            text='We know how large objects will act, but things on a small scale.'
            statusText='secondary-text'
            size='sm'
          />
          <div className='btn-action'>
            <Button title='Get Quote Now' variant='primary' size='sm' />
            <Button title='Learn More' variant='secondary' size='sm' />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
