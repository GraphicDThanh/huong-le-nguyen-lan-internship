interface ImageProps {
  image?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  index?: string | number;
  href?: string;
  alt?: string;
  statusImage?: 'primary-image' | 'secondary-image';
  pointer?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

export default ImageProps;
