import React from 'react';
import { Home, Truck, Video, Bell, BarChart2, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div className="w-[260px] bg-sidebar-bg h-screen p-6 flex flex-col border-r border-border fixed left-0 top-0">
      <div className="text-2xl font-extrabold text-text-dark mb-12 flex items-center gap-2">
        Western<span className="text-primary">Railways</span>
      </div>
      
      <ul className="list-none p-0 m-0 flex-1">
        <li className="mb-3">
          <a className="flex items-center px-4 py-3 text-primary bg-[rgba(235,87,87,0.08)] rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
            <Home size={20} className="mr-4" />
            Dashboard
          </a>
        </li>
        <li className="mb-3">
          <a className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
            <Truck size={20} className="mr-4" />
            Vehicles
          </a>
        </li>
        <li className="mb-3">
          <a className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
            <Video size={20} className="mr-4" />
            Live Feed
          </a>
        </li>
        <li className="mb-3">
          <a className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
            <BarChart2 size={20} className="mr-4" />
            Analytics
          </a>
        </li>
        <li className="mb-3">
          <a className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
            <Bell size={20} className="mr-4" />
            Alerts
          </a>
        </li>
      </ul>

      <div className="border-t border-border pt-4">
        <ul className="list-none p-0 m-0">
             <li className="mb-3">
                <a className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
                    <Settings size={20} className="mr-4" />
                    Settings
                </a>
             </li>
             <li className="mb-3">
                <a onClick={() => navigate('/')} className="flex items-center px-4 py-3 text-text-muted rounded-md no-underline font-semibold transition-all cursor-pointer hover:text-primary hover:bg-[rgba(235,87,87,0.05)]">
                    <LogOut size={20} className="mr-4" />
                    Logout
                </a>
             </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
