import { act, renderHook } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

test('It tests useSearch hooks', async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useSearch({ initialQuery: 'test' }),
  );

  expect(result.current.loading).toBe(true);
  expect(result.current.data).toEqual(null);

  await waitForNextUpdate();

  expect(result.current.loading).toBe(false);
  expect(result.current.data).not.toEqual(null);
  expect(result.current.hasMore).toEqual(true);
  expect(result.current.loadingMore).toEqual(false);

  act(() => {
    result.current.loadMore();
  });

  expect(result.current.loadingMore).toEqual(true);
  expect(result.current.loading).toEqual(false);

  await waitForNextUpdate();

  expect(result.current.loadingMore).toEqual(false);
});
