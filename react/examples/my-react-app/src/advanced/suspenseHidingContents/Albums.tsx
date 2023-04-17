import { fetchData } from './data';
import { use } from './fetchData';

interface Album {
  id: string;
  name?: string;
  title?: string;
  year?: number;
}

const Albums = ({ artistId }: { artistId: string }) => {
  const albums: Album[] = use(fetchData(`/${artistId}/albums`));

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
};

export default Albums;
