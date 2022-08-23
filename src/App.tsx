import {
  Button,
  ButtonKind,
  ButtonSize,
  Heading,
  Status,
  Text,
} from '@sintez/react';
import { useSearch } from './application/useSearch';
import { GifList } from './components/GifList';
import { SearchForm } from './components/SearchForm';

const App = () => {
  const { load, loading, total, loadingMore, loadMore, hasMore, data, error } =
    useSearch({
      initialQuery: 'kittens',
      limit: 5,
      rating: 'r',
    });

  return (
    <div className="app">
      <header>
        <Heading level={1}>GIF Search</Heading>
        <sub>
          <Status>&beta;eta</Status>
        </sub>
      </header>
      <main>
        <section className="search-form">
          <SearchForm onSearch={load} />
        </section>
        <section className="search-results">
          {loading && <Text>Loading...</Text>}
          {error && <mark>Error: {error.message}</mark>}
          {data && (
            <>
              <Text>
                Found: <strong>{total}</strong> gifs
              </Text>
              <GifList items={data} />
            </>
          )}
        </section>
        {hasMore && (
          <section className="has-more">
            <Button
              size={ButtonSize.SMALL}
              kind={ButtonKind.PLAIN}
              onClick={loadMore}
              isLoading={loadingMore}
            >
              {loadingMore ? 'Loading...' : 'Load more'}
            </Button>
          </section>
        )}
      </main>
      <footer>&copy; SIBUR, 2022</footer>
    </div>
  );
};

export default App;
