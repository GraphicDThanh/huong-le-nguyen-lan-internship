import { Form } from 'components/common/Form';
import { Typography } from 'components/common/Typography';
import './index.css';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='container'>
        <div className='contact-title'>
          <Typography text='Contact Us' size='nor' weight='extraBold' color='secondary' />
          <Typography
            text='Make an Appointment'
            size='xl'
            tagName='h2'
            weight='extraBold'
            color='secondary'
          />
        </div>
        <div className='contact-content'>
          <Form classes='form-contact' />
        </div>
      </div>
    </div>
  );
};

export { Contact };
