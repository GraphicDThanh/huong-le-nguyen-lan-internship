import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import ActionMenu from '.';

export default {
  title: 'PracticeTwo/ActionMenu',
  component: ActionMenu,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => <ActionMenu {...args} />;

export const Default = Template.bind({});
