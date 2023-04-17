import { fetchData } from './data';
import { use } from './fetchData';

export default function Biography({ artistId }: { artistId: string }) {
  const bio = use(fetchData(`/${artistId}/bio`));

  return (
    <section>
      <p className='bio'>{bio}</p>
    </section>
  );
}
