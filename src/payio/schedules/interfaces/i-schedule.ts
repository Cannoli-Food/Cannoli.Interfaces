import { IPayioScheduleSlot } from "./i-schedule-slot";

export interface IPayioSchedule {
  // #region Properties (4)

  active: boolean;
  createdAt: Date;
  time: IPayioScheduleSlot[];
  // SEG; TER; ... SEX; 20241231, 20250101
  id: string;
  updatedAt: Date;

  // #endregion Properties (4)
}
