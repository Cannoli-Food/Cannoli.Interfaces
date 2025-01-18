import { IPayioScheduleDay } from './i-schedule-day';
import { IPayioScheduleProduct } from './i-schedule-product';

export interface IPayioSchedule {
  // #region Properties (4)

  active: boolean;
  createdAt: Date;
  days: IPayioScheduleDay[];
  // SEG; TER; ... SEX; 20/24/2005, 20/25/2024
  products: IPayioScheduleProduct[];
  id: string;
  name: string;
  updatedAt: Date;

  // #endregion Properties (4)
}
