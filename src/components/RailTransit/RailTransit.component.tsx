import React from 'react';
import { io } from 'socket.io-client';
import { railFields } from '../../constants/transitFields';
import { RailIncident, RailPrediction } from '../../types/rail.types';
import useFetchRailTransitInformation from './useFetchRailTransitInformation';
import { Dropdown, NotificationHandler, Table } from '..';
import { filterStation } from '../../utils';
import './railTransit.styles.css';

const RailTransit: React.FC = () => {
  const [stations, initIncidents, initPredictions, _error, _isLoading] =
    useFetchRailTransitInformation();
  const [data, setData] = React.useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = React.useState<string>('All');
  const [incidents, setIncidents] = React.useState<RailIncident[]>([]);
  const [trains, setTrains] = React.useState<RailPrediction[]>([]);

  React.useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);

    socket.on('rail/realtime', (data: RailPrediction[]) => setData(data));
    socket.on('rail/incidents', (data: RailIncident[]) => setIncidents(data));

    return () => {
      socket.disconnect();
    };
  }, []);

  React.useEffect(() => {
    setData(initPredictions);
    setIncidents(initIncidents);
  }, [initIncidents, initPredictions]);

  React.useEffect(() => {
    const trains = filterStation(data, currentStation);
    setTrains(trains);
  }, [currentStation, data]);

  // TODO: Implement loading and error handling
  return (
    <>
      <div className='station-dropdown'>
        <p className='mr-3'>Current Station:</p>
        <Dropdown items={stations} itemClick={setCurrentStation}>
          {currentStation}
        </Dropdown>
      </div>
      <Table fields={railFields} data={trains} />
      <NotificationHandler incidents={incidents} />
    </>
  );
};

export default RailTransit;
