import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './index';
import AvatarWoman from 'assets/images/avatar-woman.png';

export default {
  title: 'PracticeOne/Common/Image',
  component: Image,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => {
  return <Image {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  image: AvatarWoman,
  size: 'xxl',
  alt: 'avatar woman',
};
