import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-white p-12 rounded-lg shadow-card w-full max-w-[400px] text-center">
        <h2 className="mb-8 text-text-dark font-bold text-2xl">Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6 text-left relative">
            <label className="block mb-2 text-sm text-text-muted font-medium">Username / Email</label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-text-muted">
                <User size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Enter your username" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pr-3 pl-10 border border-border rounded-md outline-none text-base transition-colors focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-6 text-left relative">
            <label className="block mb-2 text-sm text-text-muted font-medium">Password</label>
            <div className="relative flex items-center">
              <div className="absolute left-3 text-text-muted">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 pr-3 pl-10 border border-border rounded-md outline-none text-base transition-colors focus:border-primary"
              />
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full py-3.5 bg-primary text-white border-none rounded-md text-base font-semibold mt-4 transition-colors hover:bg-primary-hover"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
