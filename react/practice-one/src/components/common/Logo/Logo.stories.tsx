import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './index';
import LogoIcon from 'assets/icons/logo.svg';

export default {
  title: 'PracticeOne/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: LogoIcon,
  alt: 'logo',
  href: '#',
};
