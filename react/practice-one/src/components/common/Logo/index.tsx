import './index.css';

const Logo = (props) => {
  return (
    <figure className='logo'>
      <a className='logo-link' href={props.href}>
        <img src={props.logo} alt='Logo' />
      </a>
    </figure>
  );
};

export { Logo };
