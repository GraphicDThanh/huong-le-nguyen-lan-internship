import { Suspense } from 'react';
import Albums from './Albums.js';
import Biography from './Biography.js';
import Panel from './Panel.js';

interface Artist {
  name: string;
  id: string;
}

function AlbumsGlimmer() {
  return (
    <div className='glimmer-panel'>
      <div className='glimmer-line' />
      <div className='glimmer-line' />
      <div className='glimmer-line' />
    </div>
  );
}

export default function ArtistPage({ artist }: { artist: Artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </>
  );
}
