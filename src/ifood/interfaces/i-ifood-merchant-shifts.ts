import { EIFoodDayOfWeek } from "../enums";

export interface IIFoodMerchantShifts {
    id: string;
    dayOfWeek: EIFoodDayOfWeek;
    start: string;
    duration: number;
}
