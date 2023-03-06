import { ReactNode } from 'react';
import './index.css';

interface Props {
  text: string;
  classTypography?: 'banner-title' | 'section-text' | 'section-title' | 'banner-title';
  statusText?: 'primary-text' | 'secondary-text';
  weight?: 'medium' | 'semiBold' | 'bold' | 'extraBold';
  color?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'nor' | 'lg' | 'xl' | 'hg';
  tagName?: 'h1' | 'h2' | 'h3' | 'p';
  children?: ReactNode;
}

const Typography = ({
  text,
  classTypography,
  statusText,
  weight = 'medium',
  color = 'primary',
  size,
  tagName = 'p',
  children,
}: Props) => {
  const TagName = tagName;

  return (
    <TagName
      className={`typography typography-${weight} typography-${size} typography-color-${color} ${classTypography} ${statusText}`}
    >
      {text || children}
    </TagName>
  );
};

export { Typography };
