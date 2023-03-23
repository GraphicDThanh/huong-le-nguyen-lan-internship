import { Header } from '@layouts';
import { HomePage } from '@pages';
import './styles/main.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
