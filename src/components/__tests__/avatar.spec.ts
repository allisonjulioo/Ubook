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

  it('should have custom colors random colors generator', async () => {
    const wrapper = mount(Avatar, {
      props: { name: 'Allison Nunes' },
    });

    expect(wrapper.isVisible()).toBeTruthy();

    expect(wrapper.text()).toContain('A');
  });
});
