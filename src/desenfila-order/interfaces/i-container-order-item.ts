export interface IDesenfilaContainerOrderItem {
  addition: number;
  amount: number;
  code: string;
  discount: number;
  /*
   * Alterado de number para string a partir da versão 1.0.1
   */
  id: string;
  name: string;
  netAmount: number;
  quantity: number;
  unit: string;
  unitPrice: number;
}
