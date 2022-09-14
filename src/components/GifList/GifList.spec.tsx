import { render, screen } from '@testing-library/react';
import { GifList } from './index';

// Jest
test('It renders', () => {
  render(<GifList items={[]} />);

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

test('It matches snapshot', () => {
  const result = render(<GifList items={[]} />);
  expect(result.asFragment()).toMatchSnapshot();
});
