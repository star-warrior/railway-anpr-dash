import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import LiveFeed from '../components/LiveFeed';
import ChartsSection from '../components/ChartsSection';
import RecentTrucksTable from '../components/RecentTrucksTable';
import AlertsPanel from '../components/AlertsPanel';
import { Truck, Clock, AlertTriangle, CheckCircle, ArrowDown, ArrowUp } from 'lucide-react';

const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 260px; /* Sidebar width */
  padding: 2rem;
  background-color: var(--bg-color);
  min-height: 100vh;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const GridFour = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridSplit = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* Charts take more space */
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <MainContent>
        <Header />
        
        {/* Row 1: Summary Cards */}
        <GridFour>
          <SummaryCard 
            title="Total Inward Today" 
            value="124" 
            icon={<Truck size={24} />} 
            trend="12" 
            positive={true}
            color="#2f80ed"
            bgColor="rgba(47, 128, 237, 0.1)"
          />
          <SummaryCard 
            title="Avg. Loading Time" 
            value="42 min" 
            icon={<Clock size={24} />} 
            trend="5" 
            positive={false} // Increased time is bad, but logic depends. Let's say +5% is red.
            color="#f2994a"
            bgColor="rgba(242, 153, 74, 0.1)"
          />
          <SummaryCard 
            title="Alerts Pending" 
            value="3" 
            icon={<AlertTriangle size={24} />} 
            color="#eb5757"
            bgColor="rgba(235, 87, 87, 0.1)"
          />
          <SummaryCard 
            title="Total Outward Today" 
            value="98" 
            icon={<CheckCircle size={24} />} 
            trend="8"
            positive={true}
            color="#27ae60"
            bgColor="rgba(39, 174, 96, 0.1)"
          />
        </GridFour>

        {/* Row 2: Charts + (Live Feed & Alerts) */}
        <GridSplit>
             <div>
                <LiveFeed />
                <ChartsSection />
             </div>
             <RightColumn>
                <AlertsPanel />
                {/* Could add another widget here, or make Alerts take full height */}
             </RightColumn> 
        </GridSplit>
        {/* Re-thinking: Vertical flow. Live Feed needs to be prominent.
            Maybe Charts Left, LiveFeed Right?
            Let's swap: LiveFeed + Charts on Left? No that's too tall.
            Let's put LiveFeed full width? No.
            Let's stick to GridSplit: Left (Charts + Table maybe?), Right (LiveFeed + Alerts).
            Actually, user wants "Trends and Charts Section... scrollable...".
            And "Live ANPR... large dedicated panel".
            
            Revised Layout:
            Row 1: Cards
            Row 2: Live Feed (2/3 width) + Alerts (1/3 width)
            Row 3: Charts (Full width, internal scroll)
            Row 4: Table
        */}
      </MainContent>
    </DashboardLayout>
  );
};
// Re-writing the return for better layout match
const DashboardRevised = () => {
    return (
      <DashboardLayout>
        <Sidebar />
        <MainContent>
          <Header />
          
          <GridFour>
            <SummaryCard title="Total Inward" value="124" icon={<ArrowDown size={24}/>} trend="12" positive={true} color="#2f80ed" bgColor="rgba(47,128,237,0.1)"/>
            <SummaryCard title="Total Outward" value="98" icon={<ArrowUp size={24}/>} trend="8" positive={true} color="#27ae60" bgColor="rgba(39,174,96,0.1)"/>
            <SummaryCard title="Avg Loading" value="42m" icon={<Clock size={24}/>} trend="2" positive={false} color="#f2994a" bgColor="rgba(242,153,74,0.1)"/>
            <SummaryCard title="Alerts" value="3" icon={<AlertTriangle size={24}/>} color="#eb5757" bgColor="rgba(235,87,87,0.1)"/>
          </GridFour>
  
          <GridSplit style={{ gridTemplateColumns: 'minmax(0, 2fr) 1fr' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <LiveFeed />
                <ChartsSection />
                <RecentTrucksTable />
             </div>
             <RightColumn>
                <AlertsPanel />
             </RightColumn>
          </GridSplit>
        </MainContent>
      </DashboardLayout>
    );
  };

export default DashboardRevised;
