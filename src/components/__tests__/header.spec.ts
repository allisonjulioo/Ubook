import NavHeader from '@/components/NavHeader.vue';
import '@/config/setupTests';
import { mount } from '@vue/test-utils';

describe('NavHeader component', () => {
  it('should component correctly styled with the dimensions and spacings', async () => {
    const wrapper = mount(NavHeader);

    wrapper.exists();

    expect(wrapper.classes()).toContain('cs-nav-header');
  });

  it('should shows logo at NavHeader', async () => {
    const wrapper = mount(NavHeader);

    wrapper.exists();

    const logoAgenda = wrapper.find('img');

    expect(logoAgenda.attributes('alt')).toBe('logo_agenda');

    expect(logoAgenda.attributes('aria-label')).toBe('Logo do site de agenda');

    expect(logoAgenda.isVisible()).toBeTruthy();
  });

  it('should shows searchbar at NavHeader', async () => {
    const wrapper = mount(NavHeader);

    const searchBar = wrapper.find('form');

    searchBar.exists();

    expect(searchBar.isVisible()).toBeTruthy();
  });
});
