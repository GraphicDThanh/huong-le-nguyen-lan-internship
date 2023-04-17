import { fetchData } from './data.js';

type Album = {
  id: string;
  title: string;
  year: number;
};

const use = (promise: any) => {
  if (promise.status === 'fulfilled') {
    return promise.value;
  }

  if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    const demo = promise;
    demo.status = 'pending';
    demo.then(
      (result: any) => {
        demo.status = 'fulfilled';
        demo.value = result;
      },
      (reason: any) => {
        demo.status = 'rejected';
        demo.reason = reason;
      },
    );
    throw promise;
  }
};

export default function SearchResults({ query }: { query: string }) {
  const albums: Album[] = use(fetchData(`/search?q=${query}`));

  if (query === '') {
    return null;
  }

  return (
    <ul>
      {albums.length === 0 ? (
        <p>
          No matches for <i>{query}</i>
        </p>
      ) : (
        albums.map((album) => (
          <li key={album.id}>
            {album.title} ({album.year})
          </li>
        ))
      )}
    </ul>
  );
}
