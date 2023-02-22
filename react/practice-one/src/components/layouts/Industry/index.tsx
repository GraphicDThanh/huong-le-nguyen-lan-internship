import { ProjectCard } from 'components/common/ProjectCard';
import { Typography } from 'components/common/Typography';
import './index.css';

import Forest from 'assets/images/forest.png';
import SkyStar from 'assets/images/sky-star.png';
import Economy from 'assets/images/economy.png';
import Chart from 'assets/images/chart.png';

const Industry = () => {
  return (
    <div className='industry-wrapper'>
      <div className='container'>
        <div className='industry-title'>
          <Typography
            text='We Are Optimists Who Love To Work Together'
            tagName='h2'
            size='xl'
            weight='bold'
            classes='section-title'
            statusText='primary-text'
          />
          <Typography
            text='Industry'
            tagName='h2'
            size='xl'
            weight='bold'
            classes='section-title'
            statusText='secondary-text'
          />
          <Typography
            text='Problems trying to resolve the conflict between the two major 
              realms of Classical physics: Newtonian mechanics'
            classes='section-text'
            size='nor'
            weight='medium'
          />
        </div>
        <div className='industry-content'>
          <ProjectCard
            background={Forest}
            name='Tax Management'
            title='Life Tips From Top Ten Adventure Travelers'
          />
          <ProjectCard
            background={SkyStar}
            name='Tax Management'
            title='Life Tips From Top Ten Adventure Travelers'
          />
          <ProjectCard
            background={Economy}
            name='Tax Management'
            title='Life Tips From Top Ten Adventure Travelers'
          />
          <ProjectCard
            background={Chart}
            name='Tax Management'
            title='Life Tips From Top Ten Adventure Travelers'
          />
        </div>
      </div>
    </div>
  );
};

export { Industry };
