import { IMottuAddress } from "../interfaces";
import { IMottuDeliveries } from "../interfaces/i-deliveries";
import { MottuAddressEntity } from "./address.entity";

export class MottuDeliveriesEntity implements IMottuDeliveries {
  public code: string = '';
  public fullCode: string = '';
  public name: string = '';
  public phone: string = '';
  public observation: string = '';
  public onlinePayment: boolean = true;
  public productValue: number = 0;
  public id: number = 0;
  public situation: number = 0;
  public orderRoute: number = 0;
  public address: IMottuAddress = new MottuAddressEntity();
  public distance: number = 0;
  public deliveryCode: string = '';

  constructor(data?: Partial<MottuDeliveriesEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

}