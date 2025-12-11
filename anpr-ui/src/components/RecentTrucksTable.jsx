import React from 'react';
import styled from 'styled-components';
import { MoreHorizontal } from 'lucide-react';

const TableCard = styled.div`
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  margin-top: 2rem;
  overflow: hidden;
  padding: 1.5rem;
`;

const TableTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--text-dark);
  font-size: 1.1rem;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.875rem;
  border-bottom: 1px solid var(--border-color);
`;

const Td = styled.td`
  padding: 1rem;
  color: var(--text-dark);
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border-color);
  
  &:first-child {
    font-weight: 500;
  }
`;

const StatusPill = styled.span`
  background-color: ${props => props.status === 'Inward' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)'};
  color: ${props => props.status === 'Inward' ? '#10b981' : '#f59e0b'};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.5rem;
  border-radius: 50%;
  &:hover {
    background-color: var(--bg-color);
    color: var(--text-dark);
  }
`;

const RecentTrucksTable = () => {
    // Placeholder Data
    const trucks = [
        { id: 1, time: '2023-12-19 08:32', plate: 'KA-01-AB-1234', driver: 'Ramesh Kumar (DHL)', purpose: 'Unloading', status: 'Inward' },
        { id: 2, time: '2023-12-19 09:15', plate: 'MH-12-CD-5678', driver: 'Suresh Singh (Tata)', purpose: 'Loading', status: 'Outward' },
        { id: 3, time: '2023-12-19 09:45', plate: 'TN-05-XY-9012', driver: 'John Doe (FedEx)', purpose: 'Maintenance', status: 'Inward' },
        { id: 4, time: '2023-12-19 10:20', plate: 'DL-04-JK-3456', driver: 'Vikram Seth', purpose: 'Unloading', status: 'Inward' },
        { id: 5, time: '2023-12-19 11:00', plate: 'AP-09-LM-7890', driver: 'Alice Smith', purpose: 'Loading', status: 'Outward' },
    ];

  return (
    <TableCard>
      <TableTitle>Recent Vehicle Activity</TableTitle>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Date & Time</Th>
              <Th>Vehicle No.</Th>
              <Th>Driver / Firm</Th>
              <Th>Purpose</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {trucks.map((truck) => (
                <tr key={truck.id}>
                    <Td>{truck.time}</Td>
                    <Td>{truck.plate}</Td>
                    <Td>{truck.driver}</Td>
                    <Td>{truck.purpose}</Td>
                    <Td><StatusPill status={truck.status}>{truck.status}</StatusPill></Td>
                    <Td>
                        <ActionButton title="Details">
                            <MoreHorizontal size={18} />
                        </ActionButton>
                    </Td>
                </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </TableCard>
  );
};

export default RecentTrucksTable;
