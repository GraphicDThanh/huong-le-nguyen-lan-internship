import { Suspense, lazy } from 'react';
import { Album } from './data';
import { Loading } from './Loading';
import Panel from './Panel';
import './index.css';
import AlbumsGlimmer from './AlbumGlimmer';

const MyAlbum = lazy(() => import('./Albums'));
const Bio = lazy(() => import('./Biography'));

const ArtistPage = ({ artist }: { artist: Album }) => (
  <>
    <h1>{artist.name}</h1>
    <Suspense fallback={<Loading />}>
      <Bio artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <MyAlbum artistId={artist.id} />
        </Panel>
      </Suspense>
    </Suspense>
  </>
);

export default ArtistPage;
