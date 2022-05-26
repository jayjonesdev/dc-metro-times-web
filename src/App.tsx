import React from 'react';
import { io } from 'socket.io-client';
import { RailPrediction } from './types/rail.types';
import { Dropdown, Header, TransitInformation } from './components';
import { trainFields } from './constants/transitFields';
import './App.css';

const App = () => {
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);
  const [data, setData] = React.useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = React.useState<string>('All');
  const [stations, setStations] = React.useState<string[]>([]);
  const [transitType, setTransitType] =
    React.useState<'train' | 'bus'>('train');

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);
    socket.on('realtime', (data: RailPrediction[]) =>
      transitType === 'train' ? setTrains(data) : {}
    );
    // socket.on('incidents', (data: any) => {
    //   console.log(data)
    // })

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

  React.useEffect(() => {
    const filteredData = filterTrainStation(
      transitType === 'train' ? trains : []
    );
    setData(filteredData);
  }, [trains, currentStation]);

  const filterTrainStation = (trains: RailPrediction[]) => {
    return currentStation !== 'All'
      ? trains.filter((train) => train.LocationName === currentStation)
      : trains;
  };

  return (
    <div className='page'>
      <Dropdown
        items={stations}
        itemClick={setCurrentStation}
        className='station-dropdown'
      >
        Select Station
      </Dropdown>
      <div className='table-container'>
        <table className='table'>
          <Header fields={trainFields} />
          <tbody className='table-body'>
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
