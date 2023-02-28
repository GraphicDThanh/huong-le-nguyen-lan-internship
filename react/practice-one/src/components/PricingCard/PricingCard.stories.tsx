import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingCard } from './index';
import CircleCheckFill from 'assets/icons/circle-check-fill.svg';
import CircleCheck from 'assets/icons/circle-check.svg';

export default {
  title: 'PracticeOne/Common/PricingCard',
  component: PricingCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PricingCard>;

const Template: ComponentStory<typeof PricingCard> = (args) => {
  const listItem = [
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheckFill,
      title: 'Unlimited product updates',
    },
    {
      image: CircleCheck,
      title: '1GB  Cloud storage',
    },
    {
      image: CircleCheck,
      title: 'Email and community support',
    },
  ];

  return <PricingCard {...args} listItem={listItem} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'FREE',
  price: '12',
  name: 'Organize across all apps by hand',
};

export const Label = Template.bind({});
Label.args = {
  title: 'FREE',
  price: '100',
  name: 'Organize across all apps by hand',
  status: 'new',
};
