import { fireEvent, render, screen } from '@testing-library/react';
import { SearchForm } from './index';

test('It places focus on render', () => {
  render(<SearchForm />);

  const input = screen.getByRole(/searchbox/);
  expect(input).toHaveFocus();
});

test('It handles submit', () => {
  // Prepare
  const handler = jest.fn();
  const query = 'cats';
  render(<SearchForm onSearch={handler} />);

  // Act
  const form = screen.getByRole('search');
  const input = screen.getByRole('searchbox');
  fireEvent.change(input, { target: { value: query } });
  fireEvent.submit(form);

  // Assert
  expect(handler).toHaveBeenCalledTimes(1);
  expect(handler).toHaveBeenCalledWith(query);
});

test('It handles empty input', () => {
  // Prepare
  const handler = jest.fn();
  render(<SearchForm onSearch={handler} />);

  // Act
  const form = screen.getByRole('search');
  fireEvent.submit(form);

  // Assert
  expect(handler).toHaveBeenCalledTimes(0);
});
