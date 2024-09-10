

export class IProductSectionSchedule {
    fri: boolean;
    mon: boolean;
    sat: boolean;
    sun: boolean;
    thu: boolean;
    tue: boolean;
    wed: boolean;
    startAt: string;
    endAt: string;
}

export const factoryProductSectionSchedule = (): IProductSectionSchedule => {
    return {
        fri: true,
        mon: true,
        sat: true,
        sun: true,
        thu: true,
        tue: true,
        wed: true,
        startAt: '00:00',
        endAt: '23:59',
    };
};
