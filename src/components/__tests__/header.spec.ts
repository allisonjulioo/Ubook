import Header from '@/components/Header.vue';
import '@/config/setupTests';
import { render, screen } from '@testing-library/vue';

describe('Header component', () => {
  it('should component correctly styled with the dimensions and spacings', async () => {
    render(Header);

    const navHeader = await screen.findByTestId('nav-header');

    expect(navHeader).toHaveStyle('height: 4rem');
    expect(navHeader).toHaveStyle('padding: 1rem');
    expect(navHeader).toHaveStyle('margin: 0 0 6rem');
  });

  it('should shows logo at header', async () => {
    render(Header);

    const logoAgenda = await screen.findByAltText('logo_agenda');

    expect(logoAgenda).toBeInTheDocument();
    expect(logoAgenda.tagName).toBe('img');
    expect(logoAgenda.getAttribute('src')).toContain('ic-logo.svg');
    expect(logoAgenda.ariaLabel).toBe('Logo do site de agenda');
    expect(logoAgenda).toHaveStyle('height: 2rem');
    expect(logoAgenda).toHaveStyle('margin: 0 14.25rem 0 0');
  });

  it('should shows searchbar at header', async () => {
    render(Header);

    const searchBar = await screen.findByTestId('search-bar');

    expect(searchBar).toBeInTheDocument();
  });
});
