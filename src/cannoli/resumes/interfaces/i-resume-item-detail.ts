import { ICoords } from '../../../general';

export interface IResumeItemDetail {
  cords: ICoords[];
  count: number; // vezes utilizados
  orderItemsCount: number; // total de itens de todos os pedidos
  totalAmount: number; //  soma subtotal dos pedidos
  totalDiscount: number; // valor total em desconto
}
