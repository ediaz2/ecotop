import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Navbar from './components/Navbar';
import ListarUsuario from './components/listarUsuario';

// private routes
const PrivateRoute = ({ component: RouteComponent }) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/users"
          element={<PrivateRoute component={ListarUsuario} />}
        />
      </Routes>
    </div>
  );
}

export default App;
