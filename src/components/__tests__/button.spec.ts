import Button from '@/components/Button.vue';
import { mount } from '@vue/test-utils';

describe('base-button', () => {
  it('should have custom btn name from default slot', async () => {
    const wrapper = mount(Button, { slots: { default: 'Enter' } });

    wrapper.exists();

    expect(wrapper.text()).toContain('Enter');
  });

  it('should have custom class by variant props', async () => {
    const wrapper = mount(Button, { props: { variant: 'primary' } });

    wrapper.exists();

    expect(wrapper.classes()).toContain('cs-primary');

    expect(wrapper.classes('cs-btn')).toBeTruthy();
  });

  it('should send the correctly props', async () => {
    const wrapper = mount(Button, { props: { variant: 'secondary' } });

    wrapper.exists();

    expect(wrapper.props('variant')).toBe('secondary');
  });
});
