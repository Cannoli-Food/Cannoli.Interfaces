import { IInvoicePix } from '../../invoice';
import { EWithdrawRequestStatus } from '../../withdraw/enums';

export interface ITransferRequest {
  id: string;
  createdAt: Date;
  liveMode: boolean;
  containerId: string;
  merchantId: string;
  naiRefId: string;
  amount: number;
  aprovedAt: Date | null;
  transactionId: string | null;
  transactionReferenceId: string | null;
  status: EWithdrawRequestStatus;
  transferDocumentUrl: string | null;
  updatedAt: Date;
  pix: IInvoicePix | null;
}
