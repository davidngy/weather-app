import './App.css';
import React from 'react';
import Location from './components/Location';
import EnterLocation from './components/EnterLocation';

function App() {
  return (
    <div className='bg-cyan-600 h-screen'>
      <EnterLocation></EnterLocation>
      <Location></Location>
    </div>
  );
}

export default App;
