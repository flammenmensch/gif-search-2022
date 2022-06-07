import React, { useEffect, useState } from 'react';
import { search } from '../services/api';
import { GifObject } from '../domain';

type UseSearchOptions = Pick<
  Parameters<typeof search>[0],
  'limit' | 'rating'
> & { initialQuery?: string };

export const useSearch = (options: UseSearchOptions = {}) => {
  const [query, setQuery] = useState('');
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [data, setData] = useState<GifObject[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const { initialQuery, limit = 10, rating = 'g' } = options;

  const load = React.useCallback(
    (q: string) => {
      setQuery(q);
      setLoading(true);
      setData(null);
      setTotal(0);

      search({ offset: 0, rating, limit, query: q })
        .then((response) => {
          setData(response.data);
          setHasMore(
            response.pagination.count < response.pagination.total_count,
          );
          setTotal(response.pagination.total_count);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [rating, limit],
  );

  const loadMore = React.useCallback(() => {
    setLoadingMore(true);

    search({ query, offset: offset + limit, rating, limit })
      .then((response) => {
        setData((prev) => [...(prev ?? []), ...response.data]);
        setOffset((prev) => prev + response.pagination.count);
        setHasMore(
          response.pagination.count + offset < response.pagination.total_count,
        );
      })
      .catch((error) => setError(error))
      .finally(() => setLoadingMore(false));
  }, [query, offset, limit, rating]);

  useEffect(() => {
    if (initialQuery) {
      load(initialQuery);
    }
  }, [initialQuery, load]);

  return {
    loading,
    loadingMore,
    data,
    error,
    load,
    loadMore,
    hasMore,
    total,
  };
};
