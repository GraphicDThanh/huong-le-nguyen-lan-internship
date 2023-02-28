import { Button } from '../Button';
import './index.css';

interface Props {
  name?: string;
  title?: string;
  background: string;
  onclick?: (e: React.MouseEvent) => void;
}

const ProjectCard = ({ name, title, background, onclick }: Props) => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${background})` }}>
      <div className='card-description'>
        <p className='card-name'>{name}</p>
        <p className='card-title'>{title}</p>
      </div>
      <div className='card-action'>
        <Button variant='primary' size='sm' title='View Project' onClick={onclick} />
      </div>
    </div>
  );
};

export { ProjectCard };
