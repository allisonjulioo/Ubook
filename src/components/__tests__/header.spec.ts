import NavHeader from '@/components/NavHeader.vue';
import '@/config/setupTests';
import { render, screen, waitFor } from '@testing-library/vue';

describe('NavHeader component', () => {
  it('should component correctly styled with the dimensions and spacings', async () => {
    render(NavHeader);

    const navHeader = await screen.findByTestId('nav-header');

    expect(navHeader).toHaveClass('nav-header');

    expect(navHeader).toBeInTheDocument();
  });

  it('should shows logo at NavHeader', async () => {
    render(NavHeader);

    const logoAgenda = await screen.findByAltText('logo_agenda');

    expect(logoAgenda).toBeInTheDocument();
    expect(logoAgenda.tagName).toBe('IMG');

    waitFor(() => {
      expect(logoAgenda).toHaveAttribute('src');
      expect(logoAgenda.getAttribute('aria-label')).toBe(
        'Logo do site de agenda',
      );
    });
  });

  it('should shows searchbar at NavHeader', async () => {
    render(NavHeader);

    const searchBar = await screen.findByTestId('search-bar');

    expect(searchBar).toBeInTheDocument();
  });
});
