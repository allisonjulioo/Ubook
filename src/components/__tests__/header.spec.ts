import NavHeader from '@/components/NavHeader.vue';
import '@/config/setupTests';
import { store } from '@/store';
import { mount } from '@vue/test-utils';

describe('NavHeader component', () => {
  const configMock = {
    props: {
      title: 'Modal Teste',
      id: 'test-modal',
    },
    global: {
      plugins: [store],
    },
  };

  it('should component correctly styled with the dimensions and spacings', async () => {
    const wrapper = mount(NavHeader, configMock);

    wrapper.exists();

    expect(wrapper.classes()).toContain('cs-nav-header');
  });

  it('should shows logo at NavHeader', async () => {
    const wrapper = mount(NavHeader, configMock);

    wrapper.exists();

    const logoAgenda = wrapper.find('img');

    expect(logoAgenda.attributes('alt')).toBe('logo_agenda');

    expect(logoAgenda.attributes('aria-label')).toBe('Logo do site de agenda');

    expect(logoAgenda.isVisible()).toBeTruthy();
  });

  it('should shows searchbar at NavHeader', async () => {
    const wrapper = mount(NavHeader, configMock);

    const searchBar = wrapper.find('form');

    searchBar.exists();

    expect(searchBar.isVisible()).toBeTruthy();
  });

  it('should open modal new contact', async () => {
    const wrapper = mount(NavHeader, configMock);

    wrapper.vm.handleOpen();

    expect(store.getters.modalId).toBe('modal-add-contact');
  });
});
