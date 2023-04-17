import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from './SearchResult';

const BoxSearch = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <p>Search albums:</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: query !== deferredQuery ? 0.5 : 1,
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
};

export default BoxSearch;
