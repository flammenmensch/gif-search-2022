import { act, renderHook } from '@testing-library/react-hooks';
import { useSearch } from './useSearch';

test('It tests hook statuses', async () => {
  // Prepare
  const res = renderHook(() => useSearch({ initialQuery: 'test' }));

  // Assert
  expect(res.result.current.loading).toEqual(true);
  expect(res.result.current.data).toEqual(null);

  // Act
  await res.waitForNextUpdate();

  // Assert
  expect(res.result.current.loading).toBe(false);
  expect(res.result.current.data).not.toEqual(null);
  expect(res.result.current.hasMore).toEqual(true);
  expect(res.result.current.loadingMore).toEqual(false);

  // Act
  act(() => {
    res.result.current.loadMore();
  });

  // Assert
  expect(res.result.current.loadingMore).toEqual(true);
  expect(res.result.current.loading).toEqual(false);

  await res.waitForNextUpdate();

  expect(res.result.current.loadingMore).toEqual(false);
});
