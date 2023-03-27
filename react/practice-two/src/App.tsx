// Styles
import './styles/main.css';

// Layouts
import { Header } from '@layouts';

// Pages
import { HomePage } from '@pages';

// Contexts
import { ModalProvider } from '@contexts';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </div>
  );
};

export default App;
