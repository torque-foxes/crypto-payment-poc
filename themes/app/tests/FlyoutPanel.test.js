import { shallowMount } from '@vue/test-utils'
import FlyoutPanelComponent from '../src/js/components/FlyoutPanel'

describe('FlyoutPanelComponent.test.js', () => {
  let wrapper

  test('is a Vue instance', () => {
    wrapper = shallowMount(FlyoutPanelComponent)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
