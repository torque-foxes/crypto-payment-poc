import { shallowMount } from '@vue/test-utils';
import FlyoutPanelComponent from '../src/js/components/FlyoutPanel';

const createCmp = propsData => shallowMount(FlyoutPanelComponent, { propsData })

describe('FlyoutPanelComponent.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = createCmp({});
  });

  it('is a Vue instance', () => {
    expect(cmp.isVueInstance()).toBeTruthy();
  });

  describe('Properties', () => {
    it('returns the default value of `open` property', () => {
      expect(cmp.props().open).toBe(false);
    });

    it('returns the default value of `slideFrom` property', () => {
      expect(cmp.props().slideFrom).toBe('right');
    });

    describe('Validation', () => {
      const slideFrom = createCmp({ slideFrom: 'right' }).vm.$options.props.slideFrom

      it('validates `slideFrom` is of type string', () => {
        expect(slideFrom.type).toBe(String);
      });

      it('validates the value of `slideFrom` property is to be within array [\'right\', \'left\']', () => {
        expect(slideFrom.validator && slideFrom.validator('invalid-value')).toBeFalsy();
        expect(slideFrom.validator && slideFrom.validator('right')).toBeTruthy();
        expect(slideFrom.validator && slideFrom.validator('left')).toBeTruthy();
      });
    });
  });
});
