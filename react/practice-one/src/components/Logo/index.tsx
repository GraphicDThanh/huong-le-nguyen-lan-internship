import './index.css';

interface Props {
  href?: string;
  logo: string;
  alt?: string;
}

const Logo = ({ href, logo, alt = 'Logo' }: Props) => {
  return (
    <figure className='logo'>
      <a className='logo-link' href={href}>
        <img src={logo} alt={alt} />
      </a>
    </figure>
  );
};

export { Logo };
