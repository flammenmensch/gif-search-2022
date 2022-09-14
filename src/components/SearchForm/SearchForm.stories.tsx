import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';
import SearchForm from './SearchForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App/SearchForm',
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchForm> = (args) => (
  <SearchForm {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  onSearch: action('SUBMIT'),
};

Example.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole(/searchbox/), 'query');
  await userEvent.keyboard('{Enter}');
};
