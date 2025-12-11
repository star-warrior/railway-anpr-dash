import React from 'react';
import { Search, Bell, Mic } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-[1.75rem] font-bold m-0 text-text-dark">Main Dashboard</h1>
        <p className="text-text-muted m-0 mt-1">Welcome back, Admin</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative bg-white rounded-full px-4 py-2 flex items-center shadow-subtle w-[300px] border border-transparent transition-all focus-within:border-primary focus-within:shadow-[0_0_0_2px_rgba(235,87,87,0.1)]">
          <Search size={18} color="#9ca3af" />
          <input 
            type="text" 
            placeholder="Start searching here..." 
            className="border-none outline-none bg-transparent ml-2 w-full text-text-dark text-sm placeholder-gray-400"
          />
        </div>
        
        <button className="bg-white border-none w-10 h-10 rounded-full flex items-center justify-center shadow-subtle text-text-dark transition-all hover:text-primary hover:-translate-y-px hover:shadow-card">
            <Mic size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=eb5757&color=fff" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
             <p className="m-0 font-semibold text-sm text-text-dark">Admin User</p>
             <span className="text-xs text-text-muted">System Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
