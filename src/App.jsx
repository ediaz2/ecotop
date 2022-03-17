import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from 'pages/Auth/LoginPage';
import ListUserPage from 'pages/Users/ListUserPage';
import HomePage from 'pages/Home/HomePage';
import { CurrentUserProvider } from 'context/CurrentUserContext';

// private routes
const PrivateRoute = ({ component: RouteComponent }) => {
  const token = localStorage.getItem('token');
  if (token) return <RouteComponent />;
  return <Navigate to="/login" />;
};

function App() {
  return (
    <CurrentUserProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute component={HomePage} />} />
        <Route
          path="/users"
          element={<PrivateRoute component={ListUserPage} />}
        />
      </Routes>
    </CurrentUserProvider>
  );
}

export default App;
