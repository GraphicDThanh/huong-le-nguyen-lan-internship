import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FeatureCard } from './index';
import Users from 'assets/icons/users.svg';

export default {
  title: 'PracticeOne/Common/FeatureCard',
  component: FeatureCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => <FeatureCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: Users,
  size: 'xxxl',
  title: 'Peace of Mind',
  text: 'So it really behaves like neither. Now we have given up.',
};
