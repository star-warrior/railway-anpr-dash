import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ChartCard = styled.div`
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: var(--text-dark);
  display: flex;
  justify-content: space-between;
`;

// Placeholder Data
const inwardOutwardData = [
  { name: 'Mon', inward: 40, outward: 24 },
  { name: 'Tue', inward: 30, outward: 13 },
  { name: 'Wed', inward: 20, outward: 58 },
  { name: 'Thu', inward: 27, outward: 39 },
  { name: 'Fri', inward: 18, outward: 48 },
];

const loadingTimeData = [
  { time: '08:00', avg: 45 },
  { time: '10:00', avg: 50 },
  { time: '12:00', avg: 35 },
  { time: '14:00', avg: 70 },
  { time: '16:00', avg: 55 },
];

const vendorData = [
  { name: 'Maersk', value: 400 },
  { name: 'DHL', value: 300 },
  { name: 'FedEx', value: 300 },
  { name: 'Local', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChartsSection = () => {
  return (
    <ChartsContainer>
      {/* Bar Chart */}
      <ChartCard>
         <CardTitle>Inward vs Outward</CardTitle>
         <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={inwardOutwardData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f4f5f7'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                <Legend iconType="circle" />
                <Bar dataKey="inward" fill="var(--primary-color)" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="outward" fill="#1f2937" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
         </div>
      </ChartCard>

      {/* Line Chart */}
      <ChartCard>
        <CardTitle>Avg Loading Time (min)</CardTitle>
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={loadingTimeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="avg" stroke="var(--primary-color)" strokeWidth={3} dot={{ r: 4, fill: 'var(--primary-color)' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
         </div>
      </ChartCard>

      {/* Pie Chart */}
      <ChartCard>
        <CardTitle>Vendor Breakdown</CardTitle>
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={vendorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {vendorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
         </div>
      </ChartCard>
    </ChartsContainer>
  );
};

export default ChartsSection;
