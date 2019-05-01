import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

storiesOf('Styleguide', module)
  .addDecorator(withInfo)
  .add('Fonts', () => ({
    template: `
      <div class="main">
          <h1>Project Fonts</h1>
          <h2>Open Sans</h2>
          <p style="font-family:OpenSans">abcdefghijklmnopoqrstuvwxyzABSDEFGHIJKLMNOPQRSTUVWXYZ</p>
      </div>
    `,
  }));
