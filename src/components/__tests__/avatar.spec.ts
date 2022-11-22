import Avatar from '@/components/Avatar.vue';
import '@/config/setupTests';
import { mount } from '@vue/test-utils';

describe('Avatar Component', () => {
  it('should have custom class by avatar props', async () => {
    const wrapper = mount(Avatar, { props: { name: 'Allison Nunes' } });

    expect(wrapper.exists()).toBeTruthy();

    expect(wrapper.classes()).toContain('cs-avatar');

    expect(wrapper.props('name')).toBe('Allison Nunes');
  });

  it('should correct generated initials with props', async () => {
    const wrapper = mount(Avatar, {
      props: { name: 'Allison Nunes' },
    });

    expect(wrapper.isVisible()).toBeTruthy();

    expect(wrapper.text()).toBe('A');
  });

  it('should correct generated initials without props', async () => {
    const wrapper = mount(Avatar, {
      props: { name: '' },
    });

    expect(wrapper.isVisible()).toBeTruthy();

    expect(wrapper.text()).toBe('U');
  });
});
