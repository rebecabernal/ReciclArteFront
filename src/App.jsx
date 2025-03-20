
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/login/Login';
import { AuthProvider } from './context/Authcontext';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

