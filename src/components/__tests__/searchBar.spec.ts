import SearchBar from '@/components/SearchBar.vue';
import '@/config/setupTests';
import { render, screen } from '@testing-library/vue';

describe('SearchBar component', () => {
  it('should shows seachBar form', async () => {
    render(SearchBar);

    const formSearch = await screen.findByRole('form');

    expect(formSearch).toBeInTheDocument();
  });

  it('should shows seachBar input', async () => {
    render(SearchBar);

    const inputSearch = await screen.findByRole('input');

    expect(inputSearch).toBeInTheDocument();

    expect(inputSearch.ariaLabel).toBe('Barra de pesquisa do site de agenda');
    expect(inputSearch).toHaveAttribute('value');
    expect(inputSearch).toHaveAttribute('placeholder');
    expect(inputSearch.getAttribute('placeholder')).toBe('Buscar...');
    expect(inputSearch.getAttribute('type')).toBe('text');
  });

  it('should shows seachBar button submit', async () => {
    render(SearchBar);

    const submitSearch = await screen.findByRole('button');

    expect(submitSearch).toBeInTheDocument();

    expect(submitSearch.ariaLabel).toBe('Botão para enviar pesquisar');
    expect(submitSearch).toHaveAttribute('type');
    expect(submitSearch.getAttribute('type')).toBe('submit');
  });
});
