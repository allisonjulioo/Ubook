// libraries
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';

// MSW handlers
import handlers from '@/mocks/handlers';

const server = setupServer(...handlers);

// NEW
beforeAll(() => {
  server.listen();
});

// NEW
afterAll(() => {
  server.close();
});

export { server };
