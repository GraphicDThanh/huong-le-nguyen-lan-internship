import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Select } from './index';

export default {
  title: 'PracticeOne/Common/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [state, setState] = useState({ text: 'Ho Chi Minh', value: 'hcm' });
  const listCity = [
    { text: 'Ho Chi Minh', value: 'hcm' },
    { text: 'DaNang', value: 'dn' },
    { text: 'HaNoi', value: 'hn' },
  ];

  const handleOptionsCity = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).dataset.option!;
    const text = (e.target as HTMLButtonElement).innerHTML!;

    setState({
      value: value,
      text: text,
    });
  };

  return (
    <Select {...args} selectItems={listCity} data={state} onClick={(e) => handleOptionsCity(e)} />
  );
};

export const Default = Template.bind({});
Default.args = {};
