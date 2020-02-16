import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Tabs from './Tabs.vue';
import Tab from './TabItem.vue';

// Define the Tab component
Vue.component('Tab', Tab);

describe('Tabs', () => {
  // Inspect the raw component options
  it('sets the correct default data', () => {
    expect(typeof Tabs.data).toBe('function');
    const defaultData = Tabs.data();
    expect(defaultData.selected).toEqual(0);
    expect(defaultData.tabs).toEqual([]);
  });

  // Inspect the created hook
  it('has a created hook', () => {
    expect(typeof Tabs.created).toBe('function');
    const { vm } = mount(Tabs);
    expect(vm.tabs).toBeTruthy();
  });

  // Mount an instance and inspect the selected tab
  it('renders the correct tab when mounted', () => {
    const { vm } = mount(Tabs, {
      slots: {
        default: `
          <template slot-scope="scope">
            <tab name="tab1" :selected="scope.selected == 0">Test content</tab>
            <tab name="tab2" :selected="scope.selected == 1">Test content</tab>
          </template>
        `,
      },
    });
    expect(vm.selected).toEqual(0);
  });
});

describe('TabItem', () => {
  // Mount an instance and inspect the computed value
  it('generates the correct name value', () => {
    const { vm } = mount(Tab, {
      propsData: { name: 'Tabbed heading' },
    });
    expect(vm.nameToLowercase).toEqual('tabbed-heading');
  });
});
