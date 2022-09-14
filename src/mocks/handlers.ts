import { rest } from 'msw';
import searchResponse from './search-response.json';

export const handlers = [
  rest.get('http://api.giphy.com/v1/gifs/search', (req, res, ctx) => {
    const api_key = req.url.searchParams.get('api_key');

    if (
      typeof api_key === 'undefined' ||
      api_key === '' ||
      api_key === 'undefined'
    ) {
      return res(ctx.status(403, 'Not authorized'));
    }

    return res(ctx.status(200), ctx.json(searchResponse));
  }),
];
