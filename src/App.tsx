import React from 'react';
import { io } from 'socket.io-client';
import { RailPrediction, VehicleField } from './types/rail.types';
import { Header, TransitInformation } from './components';
import './App.css';

const trainFields: VehicleField[] = [
  { key: 'Line', label: 'Line', order: 1 },
  { key: 'LocationName', label: 'Station', order: 2 },
  { key: 'DestinationName', label: 'Destination', order: 3 },
  { key: 'Car', label: 'Cars', order: 4 },
  { key: 'Min', label: 'Minutes', order: 5 },
];

const App = () => {
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);
  const [fields, setFields] = React.useState(trainFields);

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);
    socket.on('realtime', (data: RailPrediction[]) => setTrains(data));

    return () => {
      socket.disconnect();
    };
  });

  return (
    <div className='h-screen page p-6 overflow-scroll'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-gray-400 text-md text-left'>
          <Header fields={trainFields} />
          <tbody className=''>
            {trains.map((train, index) => (
              <TransitInformation
                key={index}
                vehicle={train}
                fields={trainFields}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
