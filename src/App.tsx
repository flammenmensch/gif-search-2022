import { SearchForm } from './components/SearchForm';
import { useSearch } from './application/useSearch';
import { GifList } from './components/GifList';

const App = () => {
  const { load, loading, total, loadingMore, loadMore, hasMore, data, error } =
    useSearch({
      initialQuery: 'kittens',
      limit: 5,
      rating: 'r',
    });

  return (
    <>
      <header>
        <hgroup>
          <h1>GIF Search</h1>
          <h2>Powered by Giphy&reg;</h2>
        </hgroup>
      </header>
      <main>
        <section>
          <SearchForm onSearch={load} />
        </section>
        <section>
          {loading && <span aria-busy={true}>Loading...</span>}
          {error && <mark>Error: {error.message}</mark>}
          {data && (
            <>
              <p>
                Found: <strong>{total}</strong> gifs
              </p>
              <GifList items={data} />
            </>
          )}
        </section>
        {hasMore && (
          <section>
            <button onClick={loadMore} aria-busy={loadingMore}>
              {loadingMore ? 'Loading...' : 'Load more'}
            </button>
          </section>
        )}
      </main>
      <footer>&copy; SIBUR, 2022</footer>
    </>
  );
};

export default App;
