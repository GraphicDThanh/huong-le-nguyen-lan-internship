import { ProjectCard } from 'components/ProjectCard';
import { Typography } from 'components/Typography';
import { listProject } from 'constants/listData';
import './index.css';

const Industry = () => {
  return (
    <div className='industry-wrapper' id='product'>
      <div className='container'>
        <div className='industry-title'>
          <Typography
            text='We Are Optimists Who Love To Work Together'
            tagName='h2'
            size='xl'
            weight='bold'
            classTypography='section-title'
            statusText='primary-text'
          />
          <Typography
            text='Industry'
            tagName='h2'
            size='xl'
            weight='bold'
            classTypography='section-title'
            statusText='secondary-text'
          />
          <Typography
            text='Problems trying to resolve the conflict between the two major 
              realms of Classical physics: Newtonian mechanics'
            classTypography='section-text'
            size='nor'
            weight='medium'
          />
        </div>
        <div className='industry-content'>
          {listProject.map((item) => (
            <ProjectCard
              key={item.id}
              background={item.background}
              name={item.name}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Industry };
