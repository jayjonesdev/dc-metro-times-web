import { RailPrediction } from '../types/rail.types';

export const getStations = (data: RailPrediction[]): string[] => {
  let stations = data.reduce((acc, val) => {
    if (!acc.includes(val.LocationName)) {
      return [...acc, val.LocationName];
    }
    return acc;
  }, [] as string[]);
  stations.sort();
  stations.unshift('All');
  return stations;
};

export const filterStation = (
  data: RailPrediction[],
  station: string
): RailPrediction[] => {
  return station !== 'All'
    ? data.filter((dataItem) => dataItem.LocationName === station)
    : data;
};

export const upsertSort = (arr: string[], str: string): string[] => {
  let insertionIndex: number = 0;
  let updatedArr: string[] = [];

  updatedArr = arr.filter((val, index) => {
    if (str >= val) {
      insertionIndex = index + 1;
    }
    return val !== str;
  });

  if (updatedArr.length === arr.length) {
    updatedArr.splice(insertionIndex, 0, str);
  }
  return updatedArr;
};
