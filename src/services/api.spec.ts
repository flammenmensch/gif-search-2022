import { search } from './api';

test('It ensures api key', () => {
  const query = 'kittens';
  return search({ query });
});
