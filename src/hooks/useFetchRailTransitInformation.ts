import { useState, useEffect } from 'react';
import { fetchRailIncidents, fetchRailPredictions } from '../api/rail.api';
import { RailIncident, RailPrediction } from '../types/rail.types';
import { getStations } from '../utils';

interface RailTransitInformation {
  stations: string[];
  incidents: RailIncident[];
  predictions: RailPrediction[];
  error: string | null;
  isLoading: boolean;
}

const useFetchRailTransitInformation = (): RailTransitInformation => {
  const [stations, setStations] = useState<string[]>([]);
  const [incidents, setIncidents] = useState<RailIncident[]>([]);
  const [predictions, setPredictions] = useState<RailPrediction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    Promise.all([fetchRailIncidents(), fetchRailPredictions()])
      .then(([incidents, predictions]) => {
        const stations = getStations(predictions);

        setStations(stations);
        setIncidents(incidents);
        setPredictions(predictions);
      })
      .catch((_e) => {
        setError(
          'Unable to get transit times and incidents from WMATA, please try again later.'
        ); // TODO: Store as constant elsewhere
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { stations, incidents, predictions, error, isLoading };
};

export default useFetchRailTransitInformation;
