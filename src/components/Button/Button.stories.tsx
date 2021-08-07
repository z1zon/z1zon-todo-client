import React from 'react';
import { Meta } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Primary = () => {
  const size = select('size', ['small', 'medium', 'large'], 'medium');
  return <Button size={size} />;
};
