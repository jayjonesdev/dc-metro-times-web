import React from 'react';
import { io } from 'socket.io-client';
import { RailPrediction, VehicleField } from './types/rail.types';
import { TransitInformation } from './components';
import './App.css';

const trainFields: VehicleField[] = [
  { key: 'LocationName', label: 'Station', order: 1 },
  { key: 'DestinationName', label: 'Destination', order: 2 },
  { key: 'Car', label: 'Cars', order: 3 },
  { key: 'Min', label: 'Minutes', order: 4 },
  { key: 'Line', label: 'Line', order: 5 },
];

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
        <TransitInformation key={index} vehicle={train} fields={trainFields} />
      ))}
    </div>
  );
};

export default App;
