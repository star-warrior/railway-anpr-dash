import React from 'react';
import styled from 'styled-components';
import { Home, Truck, Video, Bell, BarChart2, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 260px;
  background-color: var(--sidebar-bg);
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--primary-color);
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const NavItem = styled.li`
  margin-bottom: 0.75rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-muted)'};
  background-color: ${props => props.active ? 'rgba(235, 87, 87, 0.08)' : 'transparent'};
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
    background-color: rgba(235, 87, 87, 0.05);
  }

  svg {
    margin-right: 1rem;
  }
`;

const Footer = styled.div`
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
`;

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <SidebarContainer>
      <Logo>
        Western<span>Railways</span>
      </Logo>
      
      <NavList>
        <NavItem>
          <NavLink active={true}>
            <Home size={20} />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Truck size={20} />
            Vehicles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Video size={20} />
            Live Feed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <BarChart2 size={20} />
            Analytics
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Bell size={20} />
            Alerts
          </NavLink>
        </NavItem>
      </NavList>

      <Footer>
        <NavList>
             <NavItem>
                <NavLink>
                    <Settings size={20} />
                    Settings
                </NavLink>
             </NavItem>
             <NavItem>
                <NavLink onClick={() => navigate('/')}>
                    <LogOut size={20} />
                    Logout
                </NavLink>
             </NavItem>
        </NavList>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
