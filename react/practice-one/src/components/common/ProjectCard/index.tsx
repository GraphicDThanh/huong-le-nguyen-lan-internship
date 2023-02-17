import { Button } from '../Button';
import './index.css';

interface Props {
  name?: string;
  title?: string;
  background: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${props.background})` }}>
      <div className='card-description'>
        <p className='card-name'>{props.name}</p>
        <p className='card-title'>{props.title}</p>
      </div>
      <div className='card-action'>
        <Button variant='primary' size='sm' title='View Project' />
      </div>
    </div>
  );
};

export { ProjectCard };
