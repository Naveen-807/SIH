import React, { useState } from 'react';
import api from '../services/api';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('renter');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { phone, name, role });
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Login failed');
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Welcome to Faarm Pool</h2>
      <p>Login to access farm machinery rentals</p>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="renter">Renter</option>
        <option value="owner">Owner</option>
      </select>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
