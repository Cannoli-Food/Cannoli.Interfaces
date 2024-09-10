import { BadRequestException } from '@nestjs/common';
export interface IPoint {
    longitude: number;
    latitude: number;
}

export function factoryPoint(long: string | null | undefined, lat: string | null | undefined) {
    try {
        return {
            longitude: long ? parseFloat(long) : 0,
            latitude: lat ? parseFloat(lat) : 0,
        } as IPoint;
    } catch (error) {
        throw new BadRequestException('Longitude ou Latitude inválidas');
    }
}
