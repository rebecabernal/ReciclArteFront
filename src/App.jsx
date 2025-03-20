import AppRouter from './application/Router';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


const App = () => {
  return (
  <>
    <Header/>
    <Navbar/>
    <Footer/>
    <AppRouter/>
  </>
  );
};

export default App;

