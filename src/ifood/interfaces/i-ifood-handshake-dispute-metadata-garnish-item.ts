import { IIFoodHandshakeAmount } from "./i-ifood-handshake-amount";

export interface IIFoodHandshakeDisputeMetadataGarnishItem {
  id: string;
  parentUniqueId: string;
  externalCode: string;
  quantity: number;
  index: number;
  amount: IIFoodHandshakeAmount;
  reason?: string;
}
