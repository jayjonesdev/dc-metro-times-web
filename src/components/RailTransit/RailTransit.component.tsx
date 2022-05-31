import React from 'react';
import { io } from 'socket.io-client';
import { fetchRailPredictions } from '../../api/rail.api';
import { railFields } from '../../constants/transitFields';
import { RailIncident, RailPrediction } from '../../types/rail.types';
import { Dropdown, NotificationHandler, Table } from '..';
import { filterStation, getStations } from '../../utils';
import './railTransit.styles.css';

const RailTransit: React.FC = () => {
  const [data, setData] = React.useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = React.useState<string>('All');
  const [stations, setStations] = React.useState<string[]>([]);
  const [incidents, setIncidents] = React.useState<RailIncident[]>([]);
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);
    fetchRailPredictions().then((data) => {
      const stations = getStations(data);
      setStations(stations);
      setData(data);
    });

    socket.on('rail/realtime', (data: RailPrediction[]) => setData(data));
    socket.on('rail/incidents', (data: RailIncident[]) => setIncidents(data));

    return () => {
      socket.disconnect();
    };
  }, []);

  React.useEffect(() => {
    const trains = filterStation(data, currentStation);
    setTrains(trains);
  }, [currentStation, data]);

  return (
    <>
      <div className='station-dropdown'>
        <p className='mr-3'>Current Station:</p>
        <Dropdown
          items={stations}
          itemClick={setCurrentStation}
        >
          {currentStation}
        </Dropdown>
      </div>
      <Table fields={railFields} data={trains} />
      <NotificationHandler incidents={incidents} />
    </>
  );
};

export default RailTransit;
