import { mount } from '@vue/test-utils'
import FlyoutPanelComponent from '../src/js/components/FlyoutPanel'

describe('FlyoutPanelComponent.test.js', () => {
  let wrapper

  test('is a Vue instance', () => {
    wrapper = mount(FlyoutPanelComponent)
      expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
