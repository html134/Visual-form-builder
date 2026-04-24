
import React from 'react';

interface MiniNavProps {
  setActiveView: (view: 'builder' | 'renderer') => void;
}
export default function MiniNav({ setActiveView }: MiniNavProps) {
  return (
    <nav style={{
      display: 'flex',
      padding: '10px 20px',
      backgroundColor: '#d3cdcdff',
      color: '#333',
      alignItems: 'center',
      gap: '15px'
    }}>
      <h4 onClick={() => setActiveView('builder')}>Form Builder</h4>
      <h4 onClick={() => setActiveView('renderer')}>Form Render</h4>
    </nav>
  );
}