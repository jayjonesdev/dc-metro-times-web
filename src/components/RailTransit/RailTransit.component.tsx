import { useEffect, useState, FC } from 'react';
import { railFields } from '../../constants/transitFields';
import {
  RailEventData,
  RailIncident,
  RailPrediction,
} from '../../types/rail.types';
import useFetchRailTransitInformation from '../../hooks/useFetchRailTransitInformation';
import { Dropdown, NotificationHandler, Table } from '..';
import { filterStation } from '../../utils';
import './railTransit.styles.css';

const DropdownSkeleton: React.FC = () => (
  <div id='dropdownSkeleton' className='animate-fade-in flex space-x-4'>
    <div className='h-8 bg-gray-600 w-40 rounded mb-3' />
  </div>
);

const animateComponents = (components: string[]) => {
  components.forEach((component) => {
    let element = document.getElementById(component);
    element?.classList.remove('animate-fade-in');
    element?.classList.add('animate-fade-out');
  });
};

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
    const ws = new WebSocket(`${process.env.REACT_APP_WS_SERVER_URL}`);

    ws.onmessage = (event) => {
      const railData: RailEventData = JSON.parse(event.data);

      switch (railData.eventName) {
        case 'rail/realtime':
          setData(railData.data as RailPrediction[]);
          break;
        case 'rail/incidents':
          setIncidents(railData.data as RailIncident[]);
          break;
        default:
          break;
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    animateComponents(['tableSkeleton', 'dropdownSkeleton']);

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

  // TODO: Error handling
  return (
    <>
      <div className='station-dropdown'>
        {!loading ? (
          <>
            <p className='mr-3'>Current Station:</p>
            <Dropdown items={stations} itemClick={setCurrentStation}>
              {currentStation}
            </Dropdown>
          </>
        ) : (
          <DropdownSkeleton />
        )}
      </div>
      <Table fields={railFields} data={trains} isLoading={loading} />
      {!loading && <NotificationHandler incidents={incidents} />}
    </>
  );
};

export default RailTransit;
