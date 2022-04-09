import React from 'react';
import Switch from './Switch';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Switch',
  component: Switch,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Switch {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Switch',
};
