import SearchBar from '@/components/SearchBar.vue';
import '@/config/setupTests';
import { render } from '@testing-library/vue';

describe('SearchBar component', () => {
  it('should shows seachBar form', async () => {
    const { findByRole } = render(SearchBar);

    const formSearch = await findByRole('form');

    expect(formSearch).toBeInTheDocument();
    expect(formSearch).toHaveAttribute(
      'aria-label',
      'Formulário de pesquisa do site de agenda',
    );
  });

  it('should shows seachBar input', async () => {
    const { findByRole } = render(SearchBar);

    const inputSearch = await findByRole('input');

    expect(inputSearch).toBeInTheDocument();

    expect(inputSearch).toHaveAttribute(
      'aria-label',
      'Barra de pesquisa do site de agenda',
    );
    expect(inputSearch).toHaveAttribute('placeholder');
    expect(inputSearch.getAttribute('placeholder')).toBe('Buscar...');
    expect(inputSearch.getAttribute('type')).toBe('text');
  });

  it('should shows seachBar button submit', async () => {
    const { findByRole } = render(SearchBar);

    const submitSearch = await findByRole('button');

    expect(submitSearch).toBeInTheDocument();

    expect(submitSearch).toHaveAttribute(
      'aria-label',
      'Botão para enviar pesquisar',
    );
    expect(submitSearch).toHaveAttribute('type');
    expect(submitSearch.getAttribute('type')).toBe('submit');
  });
});
