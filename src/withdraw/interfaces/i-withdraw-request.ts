import { INatiInfo, IMobyoInfo, IDesenfilaInfo } from '../../general';
import { EWithdrawRequestStatus } from '../enums';

export interface IWithdrawRequest {
  // #region Properties (12)

  amount: number;
  createdAt: Date;
  aprovedAt: Date | null;
  id: string;
  liveMode: boolean;
  status: EWithdrawRequestStatus;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  updatedAt: Date;
  natiInfo: INatiInfo;
  mobyoInfo: IMobyoInfo;
  desenfilaInfo: IDesenfilaInfo;
}
