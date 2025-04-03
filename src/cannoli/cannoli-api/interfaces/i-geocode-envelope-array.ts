import { IGeocode } from './i-geocode';

export interface IGeocodeEnvelopeArray {
    results: IGeocode[];
    status: 'OK';
}
