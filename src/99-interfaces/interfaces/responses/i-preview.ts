import { ENineNineCurrency } from '../../enums';

export interface INineNinePreview {
  fee: number;
  id: string;
  currency: ENineNineCurrency;
  created_time: number;
  expires_time: number;
  delivery_distance: number;
  delivery_duration: number;
}
