import { ICoords, IMobyoInfo, INatiInfo } from '../../../../general';

export interface IResumeVoucherItem {
  confirmed: IResumeVoucherItemDetail;
  cancelled: IResumeVoucherItemDetail;
}

export interface IResumeVoucherItemDetail {
  cords: ICoords[];
  count: number; // vezes utilizados
  orderItemsCount: number; // total de itens de todos os pedidos
  totalAmount: number; //  soma subtotal dos pedidos
  totalDiscount: number; // valor total em desconto
}
