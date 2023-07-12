import React from 'react';
// import Racun from './racun';

export default function Home() {
  const pdf = async () => {
      const response = await fetch('http://localhost:3000/pdf');
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.pdf';
      link.click();
      URL.revokeObjectURL(url);
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Nešto nešto</h1>
        <p>nešto nešto d.o.o.</p>
        {/* <Racun/> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={pdf}>Spremi Račun</button>
        </div>
      </div>
    </div>
  );
}
