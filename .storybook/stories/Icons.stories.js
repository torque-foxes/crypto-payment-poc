import { storiesOf } from '@storybook/vue';

const icons = [
  // 'my-icon',
  // 'my-other-icon',
];


storiesOf('Styleguide', module)
  .add('Icons', () => ({
    data() {
        return {
            icons,
        };
    },
    template: `
      <div class="sb__story-container">
        <section class="sb__group">
          <h2 class="sb__header">Available icons</h2>

          <div class="row" v-if="icons.length > 0">
            <div class="col-3" v-for="icon in icons">
              <span class="sb__icon-label">{{ icon }}</span>
              <div class="sb__icon-holder">
                <div :class="['sb__icon sb__icon--' + icon]"></div>
              </div>
            </div>
          </div>

          <div class="row" v-if="icons.length === 0">
            <div class="col">
              <p>No icons have been configured yet.</p>
              <p>To get started add your svg icons to <code><em>./themes/src/app/icons</em></code> then add references in the icons array in <code><em>./storybook/stories/Icons.stories.js</em></code> and <code><em>.storybook/_icons.scss</em></code>.</p>
            </div>
          </div>
        </section>

        <section class="sb__group">
          <div class="row">
            <div class="col">
              <h2 class="sb__header">Icon Usage</h2>
              <p>You can use icons listed in the icons directory using the following SCSS:</p>
              <code>
                <pre>
  .btn {
    &::after {
      @include icon(my-icon, 16px, 16px);
    }
  }
                </pre>
              </code>
            </div>
          </div>
        </section>
      </div>
    `,
  }), { info: {} });

