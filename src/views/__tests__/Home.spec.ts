import App from '@/App.vue';
import '@/config/setupTests';
import { router } from '@/router';
import { store } from '@/store';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/vue';

describe('Contact list screen', () => {
  const configStore = {
    global: {
      plugins: [store, router],
    },
  };

  test('return component correctly render nav on screen', async () => {
    const { container } = render(App, configStore);

    const navHeader = container.querySelector('nav');

    expect(navHeader).toBeInTheDocument();

    expect(navHeader).toHaveClass('cs-nav-header');
  });

  test('return component correctly render logo/nav on screen', async () => {
    render(App, configStore);

    const logoHeader = await screen.findByAltText('logo_agenda');

    expect(logoHeader).toBeInTheDocument();

    expect(logoHeader).toHaveAttribute('alt', 'logo_agenda');

    expect(logoHeader).toHaveAttribute('aria-label', 'Logo do site de agenda');
  });

  test('return component correctly render form/nav on screen', async () => {
    render(App, configStore);

    const formHeader = await screen.findByRole('form');

    expect(formHeader).toBeInTheDocument();

    expect(formHeader).toHaveAttribute(
      'aria-label',
      'Formulário de pesquisa do site de agenda',
    );

    const inputFormHeader = await screen.findByAltText('input_header_search');

    expect(inputFormHeader).toBeInTheDocument();

    expect(inputFormHeader).toHaveAttribute(
      'aria-label',
      'Barra de pesquisa do site de agenda',
    );

    expect(inputFormHeader).toHaveAttribute('placeholder', 'Buscar...');

    expect(inputFormHeader).toHaveAttribute('type', 'text');

    expect(inputFormHeader).toHaveAttribute('role', 'input');

    const buttonFormHeader = await screen.findByAltText('button_header_search');

    expect(buttonFormHeader).toBeInTheDocument();

    expect(buttonFormHeader).toHaveAttribute('type', 'submit');

    expect(buttonFormHeader).toHaveAttribute('role', 'button');

    expect(buttonFormHeader).toHaveAttribute('variant', 'icon');

    expect(buttonFormHeader).toHaveAttribute(
      'aria-label',
      'Botão para enviar pesquisar',
    );

    const iconButtonFormHeader = await screen.findByAltText(
      'icon_button_header_search',
    );

    expect(iconButtonFormHeader).toHaveAttribute('icon', 'search');
  });

  test('return correctly list rendered without search', async () => {
    render(App, configStore);

    await waitFor(() => {
      screen.getByText(/Contatos/i);

      screen.getAllByText(/E-mail/i);

      screen.getAllByText(/Telefone/i);

      //  list

      screen.getByText(/Allison Nunes/i);

      screen.getByText(/Ademir Fogaça/i);
    });
  });

  test('return correctly list rendered with search', async () => {
    render(App, configStore);

    const inputFormHeader = await screen.findByAltText('input_header_search');

    const buttonFormHeader = await screen.findByAltText('button_header_search');

    await userEvent.type(inputFormHeader, 'Allison');

    await userEvent.click(buttonFormHeader);

    await screen.findByText(/Allison Nunes/i);
  });
});
