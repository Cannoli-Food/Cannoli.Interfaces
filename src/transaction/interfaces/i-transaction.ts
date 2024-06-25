import { EReleaseStatus, EOperationType, EPaymentMethodId, EMpStatus, EMpStatusDetail, ETransactionStatus } from "../enums";
import { ITransactionBalance } from "./i-balance";
import { IFeeDeatil } from "./i-fee-detail";
import { ITransactionPaymentMethod } from "./i-payment-method";
import { ITransactionTotal } from "./i-total";

export interface ITransaction {
  id: string;
  referenceId: string;
  card: {};
  merchantId: string;
  containerId: string;
  dateApproved: Date;
  dateCreated: Date;
  dateLastUpdated: Date;
  dateOfExpiration: Date;
  description: string;
  externalOrderReference: string;
  feeDetails: IFeeDeatil[];
  installments: number;
  liveMode: boolean;
  moneyReleaseDate: Date;
  moneyReleaseStatus: EReleaseStatus;
  operationType: EOperationType;
  paymentMethod: ITransactionPaymentMethod;
  paymentMethodId: EPaymentMethodId;
  posId: string;
  status: EMpStatus;
  statusDetail: EMpStatusDetail;
  transactionAmount: number;
  transactionAmountRefunded: number;
  total: ITransactionTotal;
  balance: ITransactionBalance;
  transactionStatus: ETransactionStatus;
}
