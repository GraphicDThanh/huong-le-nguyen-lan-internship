import { Button } from '../Button';
import './index.css';

interface Props {
  name?: string;
  title?: string;
  background: string;
  onclick?: (e: React.MouseEvent) => void;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${props.background})` }}>
      <div className='card-description'>
        <p className='card-name'>{props.name}</p>
        <p className='card-title'>{props.title}</p>
      </div>
      <div className='card-action'>
        <Button
          variant='primary'
          size='sm'
          title='View Project'
          onClick={(e) => props.onclick?.(e)}
        />
      </div>
    </div>
  );
};

export { ProjectCard };
