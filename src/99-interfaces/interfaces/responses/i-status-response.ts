import { INineNineStatusData } from './i-status-data';

export interface INineNineStatusResponse {
  errno: number;
  errmsg: string;
  data: INineNineStatusData;
}
