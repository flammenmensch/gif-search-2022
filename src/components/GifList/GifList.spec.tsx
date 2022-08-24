import { render, screen } from '@testing-library/react';
import { GifList } from './index';

test('It renders', () => {
  render(<GifList items={[]} />);

  const list = screen.getByRole(/list$/);
  expect(list).toBeInTheDocument();
});
