import { useEffect, useState } from 'react';
import { fetchData } from './data';

const Biography = ({ artistId }: { artistId: string }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const bio: string = await fetchData(`/${artistId}/bio`);
      setState(bio);
    };
    fetch();
  }, [artistId]);

  return (
    <section>
      <p className='bio'>{state}</p>
    </section>
  );
};

export default Biography;
