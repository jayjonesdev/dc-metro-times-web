import React from 'react';
import { io } from 'socket.io-client';
import { fetchRailPredictions } from '../../api/rail.api';
import { railFields } from '../../constants/transitFields';
import { RailIncident, RailPrediction } from '../../types/rail.types';
import { Dropdown, NotificationHandler, Table } from '..';
import './railTransit.styles.css';
import { filterStation, getStations } from '../../utils';

const RailTransit: React.FC = () => {
  const [data, setData] = React.useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = React.useState<string>('All');
  const [stations, setStations] = React.useState<string[]>([]);
  const [incidents, setIncidents] = React.useState<RailIncident[]>([]);
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);

  React.useEffect(() => {
    fetchRailPredictions().then((data) => {
      const stations = getStations(data);
      setStations(stations);
      setData(data);
    });
  }, []);

  React.useEffect(() => {
    const trains = filterStation(data, currentStation);
    setTrains(trains);
  }, [currentStation, data]);

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);
    socket.on('rail/realtime', (data: RailPrediction[]) => setData(data));
    socket.on('rail/incidents', (data: RailIncident[]) => setIncidents(data));

    return () => {
      socket.disconnect();
    };
  });

  return (
    <>
      <Dropdown
        items={stations}
        itemClick={setCurrentStation}
        className='station-dropdown'
      >
        Select Station
      </Dropdown>
      <Table fields={railFields} data={trains} />
      <NotificationHandler incidents={incidents} />
    </>
  );
};

export default RailTransit;
