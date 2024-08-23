import { IInvoicePix } from '../../invoice';
import { EWithdrawRequestStatus } from '../../withdraw/enums';
import { ITransferRequest } from '../interfaces/i-withdraw-request';

export class TransferRequestEntity implements ITransferRequest {
  // #region Properties (11)

  public amount: number = 0;
  public aprovedAt: Date | null = null;
  public containerId: string = '';
  public merchantId: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public liveMode: boolean = false;
  public status: EWithdrawRequestStatus = EWithdrawRequestStatus.PENDING;
  public transactionId: string | null = null;
  public transferDocumentUrl: string | null = null;
  public updatedAt: Date = new Date();
  public transactionReferenceId: string | null = null
  public naiRefId: string = '';
  public pix: IInvoicePix | null = null;

  constructor(data?: Partial<TransferRequestEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
