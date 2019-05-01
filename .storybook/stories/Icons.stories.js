import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

storiesOf('Styleguide', module)
  .addDecorator(withInfo)
  .add('Icons', () => ({
    template: `
      <div class="main">
          <h1>Project Icons</h1>
          <span class="icon icon--close"></span>
      </div>
    `,
  }));
