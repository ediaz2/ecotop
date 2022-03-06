import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from 'pages/Auth/LoginPage';
import ListUserPage from 'pages/Users/ListUserPage';
import HomePage from 'pages/Home/HomePage';

// private routes
const PrivateRoute = ({ component: RouteComponent }) => {
  const token = localStorage.getItem('token');
  if (token) return <RouteComponent />;
  return <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute component={HomePage} />} />
      <Route
        path="/users"
        element={<PrivateRoute component={ListUserPage} />}
      />
    </Routes>
  );
}

export default App;
