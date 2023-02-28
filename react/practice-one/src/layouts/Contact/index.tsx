import { Form } from 'components/Form';
import { Typography } from 'components/Typography';
import './index.css';

const Contact = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('success');
  };

  return (
    <div className='contact-wrapper' id='contact'>
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
          <Form onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export { Contact };
