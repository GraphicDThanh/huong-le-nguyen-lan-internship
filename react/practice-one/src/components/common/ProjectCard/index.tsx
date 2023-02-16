import { Button } from '../Button';
import chartImg from 'assets/images/chart.png';
import './index.css';

const ProjectCard = () => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${chartImg})` }}>
      <div className='card-description'>
        <p className='card-name'>Tax Management</p>
        <p className='card-title'>Life Tips From Top Ten Adventure Travelers</p>
      </div>
      <div className='card-action'>
        <Button variant='primary' size='sm' />
      </div>
    </div>
  );
};

export { ProjectCard };
