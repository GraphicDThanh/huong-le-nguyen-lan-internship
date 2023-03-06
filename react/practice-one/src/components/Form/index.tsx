import { listCity, listTime } from 'constants/listData';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './index.css';

interface Props {
  onSubmit: (e: React.FormEvent) => void;
}

const Form = ({ onSubmit }: Props) => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    city: { value: '', text: 'Please Select' },
    time: { value: '', text: '4:00 Available' },
    description: '',
  });

  const handleOptionsCity = (value: string, text: string) => {
    setData((prev) => {
      return {
        ...prev,
        city: {
          value: value,
          text: text,
        },
      };
    });
  };

  const handleOptionsTime = (value: string, text: string) => {
    setData((prev) => {
      return {
        ...prev,
        time: {
          value: value,
          text: text,
        },
      };
    });
  };

  const handleOnChange = (e: React.ChangeEvent) => {
    const valueInput = (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;

    setData((prev) => {
      return {
        ...prev,
        [name]: valueInput,
      };
    });
  };

  return (
    <form className='form form-contact' onSubmit={onSubmit}>
      <div className='form-group'>
        <Input
          name='fullName'
          type='text'
          value={data.fullName}
          placeholder='Full Name'
          onChange={handleOnChange}
        />
        <Input
          name='email'
          type='email'
          value={data.email}
          placeholder='example@gmail.com'
          onChange={handleOnChange}
        />
      </div>
      <div className='form-group pc'>
        <Input
          name='fullName'
          type='text'
          value={data.fullName}
          placeholder='Full Name *'
          onChange={handleOnChange}
        />
        <Input
          name='email'
          type='email'
          value={data.email}
          placeholder='Email *'
          onChange={handleOnChange}
        />
      </div>
      <div className='form-group'>
        <Select data={data.city} selectItems={listCity} onChange={handleOptionsCity} />
        <Select data={data.time} selectItems={listTime} onChange={handleOptionsTime} />
      </div>
      <Textarea
        name='description'
        placeholder='Message'
        value={data.description}
        onChange={handleOnChange}
      />
      <div className='form-action'>
        <Button type='submit' title='Book Appointment' variant='tertiary' size='xl' />
      </div>
    </form>
  );
};

export { Form };
