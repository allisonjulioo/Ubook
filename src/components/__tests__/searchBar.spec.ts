import SearchBar from '@/components/SearchBar.vue';
import '@/config/setupTests';
import { mount } from '@vue/test-utils';

describe('SearchBar component', () => {
  it('should shows seachBar form', async () => {
    const wrapper = mount(SearchBar);

    expect(wrapper.exists()).toBeTruthy();

    expect(wrapper.isVisible()).toBeTruthy();

    expect(wrapper.attributes('aria-label')).toBe(
      'Formulário de pesquisa do site de agenda',
    );
  });

  it('should shows seachBar input', async () => {
    const wrapper = mount(SearchBar);

    const inputSearch = wrapper.find('input');

    expect(inputSearch.exists()).toBeTruthy();

    expect(inputSearch.attributes('aria-label')).toBe(
      'Barra de pesquisa do site de agenda',
    );

    expect(inputSearch.attributes('placeholder')).toBe('Buscar...');

    expect(inputSearch.attributes('type')).toBe('text');
  });

  it('should shows seachBar button submit', async () => {
    const wrapper = mount(SearchBar);

    const submitSearch = wrapper.find('cs-button');

    expect(submitSearch.exists()).toBeTruthy();

    expect(submitSearch.isVisible()).toBeTruthy();

    expect(submitSearch.attributes('aria-label')).toBe(
      'Botão para enviar pesquisar',
    );

    expect(submitSearch.attributes('type')).toBe('submit');
  });
});
