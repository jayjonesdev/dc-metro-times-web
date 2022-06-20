import { filterStation, getStations, upsertSort } from '.';
import {
  railPredictions,
  anacostiaPredictions,
} from '../components/TransitInformation/mockTrainData';

describe('upsertSort', () => {
  it('adds value that is currently not in the array', () => {
    const arr = upsertSort([], 'alpha');
    expect(arr).toEqual(['alpha']);
  });

  it('adds value in sorted order', () => {
    const arr = upsertSort(['alpha', 'charlie'], 'beta');
    expect(arr).toEqual(['alpha', 'beta', 'charlie']);
  });

  it('removes value currently in array', () => {
    const arr = upsertSort(['alpha', 'charlie'], 'charlie');
    expect(arr).toEqual(['alpha']);
  });
});

describe('filterStation', () => {
  it('get rail predictions for Metro Center station', () => {
    const predictions = filterStation(railPredictions, 'Anacostia');
    expect(predictions).toEqual(anacostiaPredictions);
  });

  it('shows all predictions', () => {
    const predictions = filterStation(railPredictions, 'All');
    expect(predictions).toEqual(railPredictions);
  });
});

describe('getStations', () => {
  it('get all stations from rail predictions', () => {
    const stations = getStations(railPredictions);

    expect(stations[0]).toEqual('All');
    expect(stations.includes('Metro Center')).toBeTruthy();
  });
});
