// Contexts
import { ModalProvider } from '@contexts';

// Layouts
import { Header, HomeLayout } from '@layouts';

const HomePage = () => {
  return (
    <>
      <Header />
      <ModalProvider>
        <HomeLayout />
      </ModalProvider>
    </>
  );
};

export default HomePage;
