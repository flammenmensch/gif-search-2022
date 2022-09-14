import { search } from './api';

test('It checks for API KEY', () => {
  const query = 'cats';

  return search({ query });
});
