import { VehicleField } from '../types/rail.types';

export const railFields: VehicleField[] = [
  { key: 'Line', label: 'Line', order: 1 },
  { key: 'LocationName', label: 'Station', order: 2 },
  { key: 'DestinationName', label: 'Destination', order: 3 },
  { key: 'Car', label: 'Cars', order: 4 },
  { key: 'Min', label: 'Minutes', order: 5 },
];
