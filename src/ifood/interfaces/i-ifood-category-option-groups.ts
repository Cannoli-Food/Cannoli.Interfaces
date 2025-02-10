import { IIFoodOptionGroupsOptions } from './i-ifood-option-groups-options';

export interface IIFoodOptionGroups {
  id: string;
  name: string;
  externalCode: string;
  status: string; // 'AVAILABLE'
  index: number;
  min: number;
  max: number;
  options: IIFoodOptionGroupsOptions;
}
