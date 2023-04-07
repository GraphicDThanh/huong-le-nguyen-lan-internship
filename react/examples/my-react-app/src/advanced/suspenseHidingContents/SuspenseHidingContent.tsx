import { Suspense, useState, useTransition } from 'react';
import IndexPage from './IndexPage';
import Layout from './Layout';
import ArtistPage from './ArtistPage';

const Router = () => {
  const [page, setPage] = useState('/');
  const [isPending, startTransition] = useTransition();

  const navigate = (url: string) => {
    startTransition(() => {
      setPage(url);
    });
  };

  if (page === '/') {
    return (
      <Layout isPending={isPending}>
        <IndexPage navigate={navigate} />
      </Layout>
    );
  }

  if (page === '/the-beatles') {
    return (
      <Layout isPending={isPending}>
        <ArtistPage
          artist={{
            id: 'the-beatles',
            name: 'The Beatles',
          }}
        />
      </Layout>
    );
  }

  return null;
};

function BigSpinner() {
  return <h2>Loading...</h2>;
}

export default function BoxApp() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}
