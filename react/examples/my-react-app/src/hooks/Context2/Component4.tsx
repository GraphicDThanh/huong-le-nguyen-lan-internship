import { memo } from 'react';

const Component4 = ({ handleChangeColor }: { handleChangeColor: () => void }) => {
  console.log('4');

  return (
    <div className='component-4' style={{ border: '1px solid black', padding: '20px' }}>
      <p>This is component 4</p>
      <button type='button' onClick={handleChangeColor}>
        Change color
      </button>
    </div>
  );
};

export default memo(Component4);
