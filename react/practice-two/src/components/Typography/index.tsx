// Styles
import './index.css';

interface TypographyProps {
  tagName?: 'h1' | 'h2' | 'h3' | 'p';
  text: string;
  size?: 'nor' | 'sm' | 'lg';
  color?: 'primary' | 'tertiary';
  weight: 'regular' | 'bold' | 'semiBold';
}

const Typography = ({
  tagName = 'p',
  text,
  size = 'nor',
  color = 'primary',
  weight,
}: TypographyProps) => {
  const TagName = tagName;

  return (
    <TagName
      className={`typography typography-color-${color} typography-size-${size} ${
        weight ? `typography-weight-${weight}` : ''
      }`}
    >
      {text}
    </TagName>
  );
};

export default Typography;
