// Styles
import './index.css';

// Components
import { Typography } from '@components';

const Header = () => {
  return (
    <header className='header-wrapper'>
      <Typography text='Management' tagName='h1' weight='bold' color='tertiary' size='lg' />
    </header>
  );
};

export default Header;
