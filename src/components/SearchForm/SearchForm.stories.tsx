import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import { SearchForm } from './index';

export default {
  title: 'components/SearchForm',
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
);

export const Example = Template.bind({});
Example.args = {
  onSearch: action('Submit'),
};

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole(/searchbox/), 'query');
  await userEvent.keyboard('{Enter}');

  // TODO Assert
};
