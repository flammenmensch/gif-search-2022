import { fireEvent, render, screen } from '@testing-library/react';
import { SearchForm } from './index';

test('It renders', () => {
  render(<SearchForm />);
  const form = screen.getByRole(/^search$/);
  expect(form).toBeInTheDocument();
});

test('It matches snapshot', () => {
  const { asFragment } = render(<SearchForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('It receives focus on render', () => {
  render(<SearchForm />);
  const searchBox = screen.getByRole(/searchbox/);

  expect(searchBox).toHaveFocus();
});

test('It handles submit', () => {
  const handler = jest.fn();
  render(<SearchForm onSearch={handler} />);
  const form = screen.getByRole(/^search$/);
  const searchBox = screen.getByRole(/searchbox/);
  const query = 'query';

  fireEvent.change(searchBox, { target: { value: query } });
  fireEvent.submit(form);

  expect(handler).toHaveBeenCalledTimes(1);
  expect(handler).toHaveBeenCalledWith(query);
});
