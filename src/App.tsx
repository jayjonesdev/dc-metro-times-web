import React from 'react';
import './App.css';
import { io } from 'socket.io-client';
import { RailPrediction } from './types/rail.types';
import { TrainInformation } from './components';

const App = () => {
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);
  
  // TODO: Host env var
  React.useEffect(() => {
    const socket = io('http://localhost:5555');
    socket.on('realtime', (data: RailPrediction[]) => setTrains(data));

    return () => {
      socket.disconnect();
    };
  }, []);

  // TODO: Fix layout
  return (
    <div className='h-screen flex flex-row flex-wrap page p-6 gap-3 overflow-scroll'>
      {trains.map((train, index) => (
        <TrainInformation key={index} train={train} />
      ))}
    </div>
  );
};

export default App;
