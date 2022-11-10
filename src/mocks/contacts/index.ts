import { url } from '@/config/axios';
import { rest } from 'msw';
import { success } from './fixtures';

interface Contacts {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const contacts = [
  rest.get(`${url}/contacts`, (req, res, ctx) => {
    const search = req.url.search.replace('?search=', '');

    if (search) {
      const filtered = success.filter(
        (contact: Contacts) =>
          contact.name.includes(search) ||
          contact.email.includes(search) ||
          contact.phone.includes(search),
      );

      return res(ctx.json(filtered));
    }

    return res(ctx.json(success));
  }),
];

export { contacts };
