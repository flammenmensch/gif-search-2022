import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { GifObject } from '../../domain';
import response from '../../mocks/search-response.json';
import { GifList } from './index';

export default {
  title: 'components/GifList',
  component: GifList,
} as ComponentMeta<typeof GifList>;

const Template: ComponentStory<typeof GifList> = (args) => (
  <GifList {...args} />
);

export const Example = Template.bind({});
Example.args = {
  items: response.data as GifObject[],
};
