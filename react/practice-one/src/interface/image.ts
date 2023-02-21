interface ImageProps {
  image?: string;
  classes?: 'primary-icon' | 'secondary-icon';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  index?: string | number;
  href?: string;
  alt?: string;
  pointer?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export default ImageProps;
