import React from 'react';
import { ArrowRight } from 'lucide-react';

const SummaryCard = ({ title, value, icon, trend, positive, color, bgColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-subtle flex flex-col justify-between h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex justify-between items-start mb-4">
        {/* Dynamic Styles via style prop for colors that vary per card */}
        <div 
          className="p-3 rounded-full flex items-center justify-center"
          style={{ backgroundColor: bgColor || 'rgba(235, 87, 87, 0.1)', color: color || 'var(--primary-color)' }}
        >
          {icon}
        </div>
        {trend && (
           <span className={`text-sm font-medium flex items-center ${positive ? 'text-green-500' : 'text-red-500'}`}>
             {positive ? '+' : ''}{trend}%
           </span>
        )}
      </div>
      <div>
        <h3 className="text-sm text-text-muted font-medium m-0">{title}</h3>
        <div className="text-[1.75rem] font-bold text-text-dark mt-2">{value}</div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-dashed border-border">
        <button className="bg-transparent border-none text-primary text-sm font-semibold flex items-center gap-1 p-0 hover:gap-2 transition-all">
          Show More <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
