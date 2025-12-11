import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--bg-color);
`;

const LoginCard = styled.div`
  background: var(--card-bg);
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: var(--text-dark);
  font-weight: 700;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  color: var(--text-muted);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem; /* space for icon */
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  outline: none;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

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
    <Container>
      <LoginCard>
        <Title>Sign In</Title>
        <form onSubmit={handleLogin}>
          <InputGroup>
            <Label>Username / Email</Label>
            <InputWrapper>
              <IconWrapper><User size={18} /></IconWrapper>
              <Input 
                type="text" 
                placeholder="Enter your username" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <InputWrapper>
              <IconWrapper><Lock size={18} /></IconWrapper>
              <Input 
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrapper>
          </InputGroup>
          <Button type="submit">Sign In</Button>
        </form>
      </LoginCard>
    </Container>
  );
};

export default Login;
