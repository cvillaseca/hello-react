import React from 'react';
import Switch from './Switch';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Switch',
  component: Switch,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Switch {...args} />;

//๐ Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Switch',
};
