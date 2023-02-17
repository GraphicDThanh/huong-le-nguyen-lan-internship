import { ReactNode } from 'react';
import './index.css';

interface Props {
  text: string;
  classes?: 'banner-title' | 'section-text';
  weight?: 'medium' | 'semiBold' | 'bold' | 'extraBold';
  color?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'nor' | 'lg' | 'xl' | 'hg';
  tagName?: 'h1' | 'h2' | 'h3' | 'p';
  children: ReactNode;
}

const Typography = (props: Props) => {
  const { weight = 'medium', color = 'primary', size = 'xs', tagName = 'p' } = props;
  const TagName = tagName;

  return (
    <TagName
      className={`typography typography-${weight} typography-${size} typography-${color} ${props.classes}`}
    >
      {props.text || props.children}
    </TagName>
  );
};

export { Typography };
