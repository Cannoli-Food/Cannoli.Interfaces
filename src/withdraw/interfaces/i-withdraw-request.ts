import { IDesenfilaInfo, IInfo, ICannoliInfo } from '../../general';
import { EWithdrawRequestStatus } from '../enums';

export interface IWithdrawRequest {
  // #region Properties (12)

  amount: number;
  createdAt: Date;
  aprovedAt: Date | null;
  id: string;
  liveMode: boolean;
  status: EWithdrawRequestStatus;
  refusalReason: string | null;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  updatedAt: Date;
  name: string;
  natiInfo: IInfo;
  cannoliInfo: ICannoliInfo;
  desenfilaInfo: IDesenfilaInfo;
}
