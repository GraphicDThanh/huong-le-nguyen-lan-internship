import { useState } from 'react';
import ArtistPage from './ArtistPage';

const AlbumArtist = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  }

  return (
    <button type='button' onClick={() => setShow(true)}>
      Open The Beatles artist page
    </button>
  );
};

export default AlbumArtist;
