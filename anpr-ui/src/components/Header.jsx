import React from 'react';
import styled from 'styled-components';
import { Search, Bell, Mic } from 'lucide-react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Greeting = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-dark);
  }
  p {
    color: var(--text-muted);
    margin: 0.25rem 0 0 0;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchBar = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow-sm);
  width: 300px;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:focus-within {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(235, 87, 87, 0.1);
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    margin-left: 0.5rem;
    width: 100%;
    color: var(--text-dark);
    font-size: 0.9rem;
    
    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5e7eb;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  p {
    margin: 0;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--text-dark);
  }
  span {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
`;

const IconButton = styled.button`
  background: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  color: var(--text-dark);
  transition: all 0.2s;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Greeting>
        <h1>Main Dashboard</h1>
        <p>Welcome back, Admin</p>
      </Greeting>

      <Controls>
        <SearchBar>
          <Search size={18} color="#9ca3af" />
          <input type="text" placeholder="Start searching here..." />
        </SearchBar>
        
        <IconButton>
            <Mic size={18} />
        </IconButton>

        <Profile>
          <Avatar>
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=eb5757&color=fff" alt="User" />
          </Avatar>
          <UserInfo>
             <p>Admin User</p>
             <span>System Admin</span>
          </UserInfo>
        </Profile>
      </Controls>
    </HeaderContainer>
  );
};

export default Header;
