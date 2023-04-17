import { useEffect, useState } from 'react';
import { Album, fetchData } from './data';

const Albums = ({ artistId }: { artistId: string }) => {
  const [state, setState] = useState<Album[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albums: Album[] = await fetchData(`/${artistId}/albums`);
      setState(albums);
    };
    fetchAlbums();
  }, [artistId]);

  return (
    <ul>
      {state.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
};

export default Albums;
