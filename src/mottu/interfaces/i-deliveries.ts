import { IMottuAddress } from "./i-address";

export interface IMottuDeliveries {
  code: string;
  fullCode: string;
  name: string;
  phone: string;
  observation: string;
  onlinePayment: boolean;
  productValue: number;
  id: number;
  situation: number;
  orderRoute: number;
  address: IMottuAddress;
  distance: number;
  deliveryCode: string;
}