import React from 'react';
import Test from './Test';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Test',
  component: Test,
} as ComponentMeta<typeof Test>;

export const Test1 = () => <Test />;
