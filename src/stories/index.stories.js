/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from 'storybook-addon-vue-info'

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import FlyoutPanel from './FlyoutPanel.vue';

import '../../themes/app/dist/app.css';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Flyout Panel', module)
  .addDecorator((storyFn, context) => withInfo()(storyFn)(context))
  .add('slides in from the right', () => ({
    components: { FlyoutPanel },
    template: `<div>
      <button class="btn btn-primary" @click="menuOpen = true">Open right</button>
      <flyout-panel
        slideFrom="right"
        :open="menuOpen"
        @close="menuOpen = !menuOpen"
      >
        <h1>Flyout Panel</h1>
        <p>Slides out from the right</p>
      </flyout-panel>
    </div>`,
    data() {
      return {
        menuOpen: false,
      }
    },
  }))
  .add('slides in from the left', () => ({
    components: { FlyoutPanel },
    template: `<div>
      <button class="btn btn-primary" @click="menuOpen = true">Open left</button>
      <flyout-panel
        slideFrom="left"
        :open="menuOpen"
        @close="menuOpen = !menuOpen"
      >
        <h1>Flyout Panel</h1>
        <p>Slides out from the left</p>
      </flyout-panel>
    </div>`,
    data() {
      return {
        menuOpen: false,
      }
    },
  }));

storiesOf('Tile', module).add('test', () => ({
  template: '<button>Hello tile</button>',
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template:
      '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
