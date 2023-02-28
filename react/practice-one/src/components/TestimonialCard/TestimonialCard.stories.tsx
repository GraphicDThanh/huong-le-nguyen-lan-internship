import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestimonialCard } from './index';
import AvatarWoman from 'assets/images/avatar-woman.png';

export default {
  title: 'PracticeOne/Common/TestimonialCard',
  component: TestimonialCard,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TestimonialCard>;

const Template: ComponentStory<typeof TestimonialCard> = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Regina Miles',
  job: 'Designer',
  image: AvatarWoman,
  rate: 4,
  description:
    'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.',
};
