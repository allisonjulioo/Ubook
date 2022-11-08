import Icon from '@/components/Icon.vue';
import '@/config/setupTests';
import { mount } from '@vue/test-utils';

describe('Icon Component', () => {
  it('should have custom class by icon props', async () => {
    const wrapper = mount(Icon, { props: { icon: 'edit' } });

    expect(wrapper.exists()).toBeTruthy();

    expect(wrapper.classes()).toContain('cs-icon-container');

    expect(wrapper.props('icon')).toBe('edit');
  });

  it('should show svg image with the correctly props', async () => {
    const wrapper = mount(Icon, { props: { icon: 'edit' } });

    expect(wrapper.exists()).toBeTruthy();

    const imageIcon = wrapper.getComponent('img');

    expect(imageIcon.attributes('src')).toBe('ic-edit.svg');
  });

  it('should show error without props', async () => {
    const spy = jest.spyOn(console, 'warn');

    window.console.warn = () => null;

    mount(Icon);

    expect(spy).not.toHaveBeenCalledWith(
      expect.stringContaining('[Vue warn]: Missing required prop: "icon"'),
    );
  });
});
