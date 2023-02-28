import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProjectCard } from './index';
import Forest from 'assets/images/forest.png';

export default {
  title: 'PracticeOne/Common/ProjectCard',
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Tax Management',
  title: 'Life Tips From Top Ten Adventure Travelers',
  background: Forest,
};
