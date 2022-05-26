export type RailPrediction = {
  Car: string;
  Destination: string;
  DestinationCode: string | null;
  DestinationName: string;
  Group: string;
  Line: Line;
  LocationCode: string;
  LocationName: string;
  Min: string;
};

export type Line = 'SV' | 'BL' | 'OR' | 'GR' | 'YL' | 'RD';

export enum LineColor {
  'SV' = 'bg-zinc-400',
  'BL' = 'bg-blue-600',
  'OR' = 'bg-orange-500',
  'GR' = 'bg-green-600',
  'YL' = 'bg-yellow-500',
  'RD' = 'bg-red-600',
}

export enum LineLongName {
  'SV' = 'Silver',
  'BL' = 'Blue',
  'OR' = 'Orange',
  'GR' = 'Green',
  'YL' = 'Yellow',
  'RD' = 'Red',
}

export type Incident = {
  IncidentID: string;
  Description: string;
  IncidentType: IncidentType | string;
  LinesAffected: string;
  DateUpdated: string;
};

export type IncidentType = 'Alert' | 'Delay';

export enum IncidentColor {
  'Alert' = 'border-rose-500',
  'Delay' = 'border-amber-400',
  'Default' = 'border-zinc-400',
}

export type VehicleField = { key: string; label: string; order: number };
