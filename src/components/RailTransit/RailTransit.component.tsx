import { FC, useEffect, useState } from 'react';
import { Button, Dropdown, NotificationHandler, Table } from '..';
import { railFields } from '../../constants/transitFields';
import useFetchRailTransitInformation from '../../hooks/useFetchRailTransitInformation';
import {
  RailEventData,
  RailIncident,
  RailPrediction,
} from '../../types/rail.types';
import { filterStation } from '../../utils';
import useIsMobile from '../../utils/hooks/useMobileDetect.hook';
import MobileTransitInformation from '../MobileTransitInformation/MobileTransitInformation.component';
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
  const isMobile = useIsMobile();

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

  const viewMap = () =>
    window.open(`${process.env.REACT_APP_WMATA_RAIL_MAP_URL}`, '_blank');

  // TODO: Error handling, for mobile display Abbreviated station names/codes
  return (
    <>
      <div className='flex justify-between mb-2'>
        <Button className='mr-3' onClick={viewMap}>View Map</Button>
        <div className='station-dropdown'>
          {!loading ? (
            <div className='flex justify-end items-center'>
              <p className='mr-3 items-baseline'>Station:</p>
              <Dropdown items={stations} itemClick={setCurrentStation}>
                {currentStation}
              </Dropdown>
            </div>
          ) : (
            <DropdownSkeleton />
          )}
        </div>
      </div>
      {isMobile ? (
        <div className='mobile-container'>
          {trains.map((vehicle, index) => (
            <MobileTransitInformation
              key={index}
              fields={railFields}
              vehicle={vehicle}
            />
          ))}
        </div>
      ) : (
        <Table fields={railFields} data={trains} isLoading={loading} />
      )}
      {!loading && <NotificationHandler incidents={incidents} />}
    </>
  );
};

export default RailTransit;
