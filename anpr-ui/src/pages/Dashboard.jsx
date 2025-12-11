import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import LiveFeed from '../components/LiveFeed';
import ChartsSection from '../components/ChartsSection';
import RecentTrucksTable from '../components/RecentTrucksTable';
import AlertsPanel from '../components/AlertsPanel';
import { Truck, Clock, AlertTriangle, CheckCircle, ArrowDown, ArrowUp } from 'lucide-react';

const DashboardRevised = () => {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-[260px] p-8 bg-background min-h-screen">
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <SummaryCard title="Total Inward" value="124" icon={<ArrowDown size={24}/>} trend="12" positive={true} color="#2f80ed" bgColor="rgba(47,128,237,0.1)"/>
            <SummaryCard title="Total Outward" value="98" icon={<ArrowUp size={24}/>} trend="8" positive={true} color="#27ae60" bgColor="rgba(39,174,96,0.1)"/>
            <SummaryCard title="Avg Loading" value="42m" icon={<Clock size={24}/>} trend="2" positive={false} color="#f2994a" bgColor="rgba(242,153,74,0.1)"/>
            <SummaryCard title="Alerts" value="3" icon={<AlertTriangle size={24}/>} color="#eb5757" bgColor="rgba(235,87,87,0.1)"/>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-8">
             <div className="flex flex-col gap-0">
                <LiveFeed />
                <ChartsSection />
                <RecentTrucksTable />
             </div>
             <div className="flex flex-col gap-6">
                <AlertsPanel />
             </div>
          </div>
        </main>
      </div>
    );
  };

export default DashboardRevised;
