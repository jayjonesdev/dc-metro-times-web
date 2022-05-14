export type RailPrediction = {
  Car: string;
  Destination: string;
  DestinationCode: string | null;
  DestinationName: string;
  Group: string;
  Line: 'SV' | 'BL' | 'OR' | 'GR' | 'YL' | 'RD';
  LocationCode: string;
  LocationName: string;
  Min: string;
};

export enum Line {
  'SV' = 'bg-zinc-400',
  'BL' = 'bg-blue-600',
  'OR' = 'bg-orange-500',
  'GR' = 'bg-green-600',
  'YL' = 'bg-yellow-500',
  'RD' = 'bg-red-600',
}
