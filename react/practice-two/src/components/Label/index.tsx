import './index.css';

interface LabelProps {
  text: string;
  variant?: 'primary' | 'success' | 'warning';
}

const Label = ({ text, variant }: LabelProps) => {
  return (
    <div className={`label-wrapper label-${variant}`}>
      <span>{text}</span>
    </div>
  );
};

export { Label };
