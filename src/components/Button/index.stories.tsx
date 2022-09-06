import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Example/MyButton',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button />;
