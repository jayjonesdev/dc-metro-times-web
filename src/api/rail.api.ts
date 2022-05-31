import api from './api';
import { RailIncident, RailPrediction } from '../types/rail.types';

export const fetchRailPredictions = async (): Promise<RailPrediction[]> =>
  await api.get('/rail/realtime').then((res) => res.data);

export const fetchRailIncidents = async (): Promise<RailIncident[]> =>
  await api.get('/rail/incidents').then((res) => res.data);
