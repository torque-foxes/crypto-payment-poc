import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import Tabs from '../../themes/app/src/js/components/Tabs/Tabs.vue';
import Tab from '../../themes/app/src/js/components/Tabs/TabItem.vue';

storiesOf('Components/Tabs', module)
  .addDecorator(withKnobs)
  .add('with mobile select', () => ({
    components: { Tabs, Tab },
    template: `
       <tabs>
          <template slot-scope="scope">
              <tab name="Tabbed heading 1" :selected="scope.selected == 0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed iaculis massa. Aenean egestas velit id ultricies faucibus. Sed non pretium dui, in molestie arcu. Morbi eget auctor justo, ac vestibulum lectus. Mauris vitae elementum lorem, vel dictum sem. Etiam tincidunt elementum mattis.</p>
                  <p>Aliquam luctus hendrerit sem. Nunc malesuada feugiat urna sit amet sodales. Vestibulum finibus massa eu vestibulum mattis. Aliquam dapibus justo non elit vestibulum, vehicula consectetur velit consequat. Pellentesque ac dapibus felis, elementum convallis quam. Integer massa tellus, fermentum vitae congue in, rhoncus ut est.</p>
                  <p>Duis est elit, maximus sed sagittis ut, dictum at turpis. Aliquam vulputate, eros eget porttitor gravida, tortor elit maximus nisi, at sollicitudin purus massa sit amet sem. Maecenas eros neque, semper sit amet bibendum ac, fermentum a nibh.</p>
              </tab>
              <tab name="Tabbed heading 2" :selected="scope.selected == 1">
                  <p>Nam sodales porta lobortis. Phasellus pretium enim a arcu dapibus, sit amet volutpat neque euismod. Donec suscipit diam vel urna gravida iaculis. Donec efficitur ultrices tortor. Praesent fringilla orci et arcu tincidunt posuere non nec lectus.</p>
              </tab>
              <tab name="Tabbed heading 3" :selected="scope.selected == 2">
                  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut non dui cursus, pulvinar ante accumsan, vestibulum neque. Fusce ullamcorper et ipsum non ullamcorper. Maecenas lacinia neque a tortor fringilla vehicula. Nulla id lobortis quam, vitae congue quam.</p>
              </tab>
          </template>
        </tabs>
    `,
    data() {
      return {
        selected: 0,
      };
    },
  }), { info: {} });
