import App from '@/App.vue';
import '@/config/setupTests';
import { router } from '@/router';
import { render, screen } from '@testing-library/vue';

describe('App', () => {
  it('Shold component correctly render and router view', async () => {
    render(App, { global: { plugins: [router] } });
    await router.isReady();
    expect(screen.getByText('Criar contato')).toBeInTheDocument();
  });
});
