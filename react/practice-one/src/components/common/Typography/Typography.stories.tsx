import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './index';

export default {
  title: 'PracticeOne/Common/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const BannerTitle = Template.bind({});
BannerTitle.args = {
  text: 'Pricing',
  classes: 'banner-title',
  tagName: 'h1',
  weight: 'extraBold',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Pricing',
  tagName: 'h2',
  size: 'md',
  weight: 'medium',
  classes: 'section-text',
};
