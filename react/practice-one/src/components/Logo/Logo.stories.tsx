import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './index';
import LogoIcon from 'assets/icons/logo.svg';

export default {
  title: 'PracticeOne/Common/Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
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
