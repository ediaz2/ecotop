import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';

// private routes
const PrivateRoute = ({ component: RouteComponent }) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};

const NoEntrar = () => {
  return (
    <div>
      <h1>No entrar</h1>
    </div>
  );
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
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/no-entrar"
          element={<PrivateRoute component={NoEntrar} />}
        />
      </Routes>
    </div>
  );
}

export default App;
