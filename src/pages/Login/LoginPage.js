import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../../services/httpClient';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    httpClient
      .post('/auth/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}>
      <div className="card p-3" style={{ width: '24rem' }}>
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-lg btn-primary btn-block mt-2"
            type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
