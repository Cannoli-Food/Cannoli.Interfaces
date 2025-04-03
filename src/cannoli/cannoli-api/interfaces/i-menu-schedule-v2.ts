

export interface IMenuScheduleV2 {
    fri: boolean;
    mon: boolean;
    sat: boolean;
    sun: boolean;
    thu: boolean;
    tue: boolean;
    wed: boolean;
    startAt: string | Date;
    endAt: string | Date;
}
