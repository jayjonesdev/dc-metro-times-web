import { useEffect, useState, FC } from 'react';
import { io } from 'socket.io-client';
import { railFields } from '../../constants/transitFields';
import { RailIncident, RailPrediction } from '../../types/rail.types';
import useFetchRailTransitInformation from '../../hooks/useFetchRailTransitInformation';
import { Dropdown, NotificationHandler, Table } from '..';
import { filterStation } from '../../utils';
import './railTransit.styles.css';

const RailTransit: FC = () => {
  const {
    incidents: initIncidents,
    stations,
    predictions: initPredictions,
  } = useFetchRailTransitInformation();
  const [data, setData] = useState<RailPrediction[]>([]);
  const [currentStation, setCurrentStation] = useState<string>('All');
  const [incidents, setIncidents] = useState<RailIncident[]>([]);
  const [trains, setTrains] = useState<RailPrediction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SERVER_URL as string);

    socket.on('rail/realtime', (data: RailPrediction[]) => setData(data));
    socket.on('rail/incidents', (data: RailIncident[]) => setIncidents(data));

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setData(initPredictions);
    setIncidents(initIncidents);

    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, [initPredictions, initIncidents]);

  useEffect(() => {
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
      <Table fields={railFields} data={trains} isLoading={loading} />
      <NotificationHandler incidents={incidents} />
    </>
  );
};

export default RailTransit;
