import React from 'react';
import styled from 'styled-components';
import { AlertTriangle, X } from 'lucide-react';

const Panel = styled.div`
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: 300px; /* Optional, depending on layout */
`;

const AlertItem = styled.div`
  background: #fef2f2;
  border-left: 4px solid #ef4444;
  padding: 0.75rem;
  border-radius: 4px;
`;

const AlertHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  align-items: center;
`;

const PlateNumber = styled.span`
  font-weight: 700;
  color: #991b1b;
  font-size: 0.9rem;
`;

const Time = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #b91c1c;
`;

const AlertsPanel = () => {
    const alerts = [
        { id: 1, plate: 'KA-05-XX-0000', time: '10:05 AM', msg: 'Unauthorized Entry Attempt' },
        { id: 2, plate: 'XX-00-ZZ-9999', time: '09:42 AM', msg: 'Blacklisted Vehicle Detected' },
        { id: 3, plate: 'MH-12-CD-5678', time: '09:15 AM', msg: 'Speed Limit Violation' },
    ];

  return (
    <Panel>
      <Title>
        Alerts
        <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', background:'rgba(235,87,87,0.1)', padding:'2px 8px', borderRadius:'12px' }}>
            {alerts.length} Pending
        </span>
      </Title>
      <AlertList>
        {alerts.map(alert => (
            <AlertItem key={alert.id}>
                <AlertHeader>
                    <PlateNumber>{alert.plate}</PlateNumber>
                    <Time>{alert.time}</Time>
                </AlertHeader>
                <Message>{alert.msg}</Message>
            </AlertItem>
        ))}
      </AlertList>
    </Panel>
  );
};

export default AlertsPanel;
