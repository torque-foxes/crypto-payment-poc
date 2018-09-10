import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

storiesOf('ButtonCounter', module)
  .add('story as a template', () => '<button-counter>story as a function template</button-counter>');
