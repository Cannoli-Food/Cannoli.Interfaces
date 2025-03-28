import { IIFoodOrderItemOptionCustomization } from "./i-ifood-order-item-option-customization";

export interface IIFoodOrderItemOption {
  description?: string;
  unitPrice: number;
  unit: string;
  ean?: string;
  quantity: number;
  externalCode?: string;
  price: number;
  name: string;
  groupName?: string;
  type?: string;
  index: number;
  id: string;
  addition: number;
  customization: IIFoodOrderItemOptionCustomization[];
}
