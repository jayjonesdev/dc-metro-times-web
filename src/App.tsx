import React from 'react';
import { io } from 'socket.io-client';
import { RailPrediction } from './types/rail.types';
import { Dropdown, Header, TransitInformation } from './components';
import { trainFields } from './constants/transitFields';
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
  const [data, setData] = React.useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = React.useState<string>('All');
  const [stations, setStations] = React.useState<string[]>([]);
  const [transitType, setTransitType] = React.useState<'train' | 'bus'>(
    'train'
  );

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);
    socket.on('realtime', (data: RailPrediction[]) =>
      transitType === 'train' ? setTrains(data) : {}
    );

    return () => {
      socket.disconnect();
    };
  });

  React.useEffect(() => {
    // Use API call to fetch station list from server
    let stations = trains.reduce((acc, val) => {
      if (!acc.includes(val.LocationName)) {
        return [...acc, val.LocationName];
      }
      return acc;
    }, [] as string[]);
    stations.sort();
    stations.unshift('All');
    setStations(stations);
  }, [trains]);

  React.useEffect(() => filterData(), [trains, currentStation]);

  const filterTrainStation = (trains: RailPrediction[]) => {
    return currentStation !== 'All'
      ? trains.filter((train) => train.LocationName === currentStation)
      : trains;
  };

  const filterData = () => {
    const filteredData = filterTrainStation(
      transitType === 'train' ? trains : []
    );
    setData(filteredData);
  };

  return (
    <div className='flex flex-col h-screen page p-6'>
      <Dropdown
        text='Select Station'
        items={stations}
        itemClick={setCurrentStation}
      />
      <div className='flex-grow overflow-auto border-4 border-gray-600 rounded-lg'>
        <table className='relative w-full border text-gray-400 text-md text-left'>
          <Header fields={trainFields} />
          <tbody className='divide-y'>
            {data.map((vehicle, index) => (
              <TransitInformation
                key={index}
                vehicle={vehicle}
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
