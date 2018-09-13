import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info'

import FlyoutPanel from '../js/components/FlyoutPanel.vue';

import '../../dist/app.css';

storiesOf('Components/Flyout Panel', module)
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

