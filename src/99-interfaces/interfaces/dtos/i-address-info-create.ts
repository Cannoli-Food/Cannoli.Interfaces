import { INineNineLocation } from "../responses/i-location";

export interface INineNineAddressCreateInfo {
  location: INineNineLocation;
  address: string;
  complement: string;
  name: string;
  phone: string;
  note: string; 
}
