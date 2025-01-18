import { IPayioScheduleSlot } from './i-schedule-slots';

export interface IPayioScheduleDay {
  // #region Properties (2)

  day: string; // Ex.: "SEG", "TER", "24/12/2024"
  slots: IPayioScheduleSlot[]; // Horários associados ao dia

  // #endregion Properties (2)
}
