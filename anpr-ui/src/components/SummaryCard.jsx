import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const IconBox = styled.div`
  background: ${props => props.bgColor || 'rgba(235, 87, 87, 0.1)'};
  color: ${props => props.color || 'var(--primary-color)'};
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
  margin: 0;
`;

const Value = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-top: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-color);
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  
  &:hover {
    gap: 0.5rem;
  }
`;

const Trend = styled.span`
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const SummaryCard = ({ title, value, icon, trend, positive, color, bgColor }) => {
  return (
    <Card>
      <Header>
        <IconBox color={color} bgColor={bgColor}>
          {icon}
        </IconBox>
        {trend && (
           <Trend positive={positive}>
             {positive ? '+' : ''}{trend}%
           </Trend>
        )}
      </Header>
      <div>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </div>
      <Footer>
        <ActionButton>
          Show More <ArrowRight size={14} />
        </ActionButton>
      </Footer>
    </Card>
  );
};

export default SummaryCard;
