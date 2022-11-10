// libraries
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';

// MSW handlers
import { handlers } from '@/mocks/handlers';

const server = setupServer(...handlers);

// NEW
beforeAll(() => {
  server.listen();
});

// NEW
afterAll(() => {
  server.close();
});

const originalWarn = window.console.warn;
window.console.warn = e => {
  return e.includes('If this is a native custom element')
    ? ''
    : originalWarn(e);
};

export { server };
