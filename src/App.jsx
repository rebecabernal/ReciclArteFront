import AppRouter from './application/Router';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <AppRouter />
    </>
  );
};

export default App;
