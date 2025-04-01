import { IIFoodHandshakeAmount } from "./i-ifood-handshake-amount";

export interface IIFoodHandshakeDisputeMetadataItem {
  id: string;
  uniqueId: string;
  externalCode: string;
  quantity: number;
  index: number;
  amount: IIFoodHandshakeAmount;
  reason?: string;
}
