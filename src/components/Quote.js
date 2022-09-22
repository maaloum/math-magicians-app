import React from 'react';

export default function Quote() {
  const content = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  };
  return (
    <div style={content}>
      Mathematics is not about numbers, equations, computations,
      <br />
      or algorithms: it is about understanding.–William Paul Thurston
    </div>
  );
}
