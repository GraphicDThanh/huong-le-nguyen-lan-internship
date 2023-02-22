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

const Typography = (props: Props) => {
  const { weight = 'medium', color = 'primary', tagName = 'p' } = props;
  const TagName = tagName;

  return (
    <TagName
      className={`typography typography-${weight} typography-${props.size} typography-color-${color} ${props.classTypography} ${props.statusText}`}
    >
      {props.text || props.children}
    </TagName>
  );
};

export { Typography };
