import { Button } from 'components/common/Button';
import { Typography } from 'components/common/Typography';
import './index.css';

const NewLetter = () => {
  return (
    <div className='new-letter-wrapper'>
      <div className='container'>
        <div className='new-letter-title'>
          <Typography
            text='Consulting Agency For Your Business'
            color='secondary'
            tagName='h2'
            size='md'
            weight='bold'
          />
          <Typography text='the quick fox jumps over the lazy dog' size='nor' color='secondary' />
        </div>
        <div className='new-letter-content'>
          <Button variant='tertiary' title='Contact Us' size='lg' />
        </div>
      </div>
    </div>
  );
};

export { NewLetter };
