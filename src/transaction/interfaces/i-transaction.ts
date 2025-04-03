import { EFrom, IDesenfilaInfo, IInfo, ICannoliInfo } from '../../general';
import { EMpStatus, EMpStatusDetail, EOperationType, EPaymentMethodId, EReleaseStatus, ETransactionStatus } from '../enums';
import { ITransactionBalance } from './i-balance';
import { IFeeDetail } from './i-fee-detail';
import { ITransactionPaymentMethod } from './i-payment-method';
import { ITransactionTotal } from './i-total';

export interface ITransaction {
  // #region Properties (33)

  balance: ITransactionBalance | null;
  card: {};
  createdAt: Date;
  dateApproved: Date | null;
  dateCreated: Date;
  dateLastUpdated: Date;
  dateOfExpiration: Date | null;
  description: string;
  desenfilaInfo: IDesenfilaInfo | null;
  externalOrderReference: string;
  feeDetails: IFeeDetail[];
  from: EFrom;
  id: string;
  installments: number;
  liveMode: boolean;
  cannoliInfo: ICannoliInfo | null;
  moneyReleaseDate: Date | null;
  moneyReleaseStatus: EReleaseStatus;
  natiInfo: IInfo | null;
  operationType: EOperationType;
  paymentMethod: ITransactionPaymentMethod | null;
  paymentMethodId: EPaymentMethodId;
  posId: string;
  referenceId: 'goLive' | 'engine_cannoli_fee' | 'withdraw' | string;
  resumeVersion: string;
  stamped: string | null;
  status: EMpStatus;
  statusDetail: EMpStatusDetail;
  total: ITransactionTotal | null;
  transactionAmount: number;
  transactionAmountRefunded: number;
  transactionStatus: ETransactionStatus;
  updatedAt: Date;

  // #endregion Properties (33)
}
