

export class IMenuScheduleV2 {
    ApiProperty({ type: Boolean, default: true, required: true })
    fri: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    mon: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    sat: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    sun: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    thu: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    tue: boolean;
    ApiProperty({ type: Boolean, default: true, required: true })
    wed: boolean;
    ApiProperty({ type: String, required: true, example: '00:00' })
    startAt: string;
    ApiProperty({ type: String, required: true, example: '23:59' })
    endAt: string;
}

export const factoryMenuScheduleV2 = (): IMenuScheduleV2 => {
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
