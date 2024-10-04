import { EDiscountType, IMobyoInfo, INatiInfo, MobyoInfoEntity } from '../../general';
import { ECampaignStatus, ECampaignTargetTypes } from '../enums';
import { ICampaign, ICampaignRule, ICampaignSponsorship } from '../interfaces';

export class CampaignEntity implements ICampaign {
  // #region Properties (10)
  public info: IMobyoInfo | INatiInfo = new MobyoInfoEntity();
  public concludedAt: Date = new Date();
  public createdAt: Date = new Date();
  public id: string = '';
  public isPublic: boolean = false;
  public key: string = '';
  public name: string = '';
  public activatedAt: Date = new Date();
  public rules: ICampaignRule[] = [];
  public type: EDiscountType = EDiscountType.PERCENT;
  public amount: number = 0;
  public sponsorship: ICampaignSponsorship[] = [];
  public status: ECampaignStatus = ECampaignStatus.ACTIVE;
  public targetsId: string[] = [];
  public targetType: ECampaignTargetTypes = ECampaignTargetTypes.CART;
  public updatedAt: Date = new Date();
  public limit: number = 0;
  public isExclusive: boolean = false;

  constructor(data?: Partial<CampaignEntity>) {
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
