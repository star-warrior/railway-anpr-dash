import React from 'react';
import styled from 'styled-components';
import { Maximize2, Video } from 'lucide-react';

const FeedContainer = styled.div`
  background: black;
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  height: 100%;
  min-height: 250px;
  cursor: pointer;
  box-shadow: var(--shadow-md);

  &:hover .overlay {
    opacity: 1;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1f2937, #111827);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.2);
  flex-direction: column;
  gap: 1rem;
`;

const LiveBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ef4444;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);

  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  
  color: white;
`;

const Label = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
  font-weight: 500;
`;

const LiveFeed = () => {
  return (
    <FeedContainer className="group">
      <Placeholder>
        <Video size={48} />
        <span>No Signal</span>
      </Placeholder>
      <LiveBadge>LIVE</LiveBadge>
      <Label>Gate 1 - Main Entry</Label>
      <Overlay className="overlay">
        <Maximize2 size={32} />
      </Overlay>
    </FeedContainer>
  );
};

export default LiveFeed;
