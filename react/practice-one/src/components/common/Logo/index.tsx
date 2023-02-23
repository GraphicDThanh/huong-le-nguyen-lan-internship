import './index.css';

interface Props {
  href?: string;
  logo: string;
  alt?: string;
}

const Logo = (props: Props) => {
  const { alt = 'Logo' } = props;

  return (
    <figure className='logo'>
      <a className='logo-link' href={props.href}>
        <img src={props.logo} alt={alt} />
      </a>
    </figure>
  );
};

export { Logo };
