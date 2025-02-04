import { IPrivacySetting } from '../interfaces/i-customer-privacy';

export class PrivacySettingEntity implements IPrivacySetting {
  // #region Properties (9)

  public orderNotifications: boolean = false;
  public pushNotificationsPromo: boolean = false;
  public emailNotificationsPromo: boolean = false;
  public whatsAppNotificationsPromo: boolean = false;
  public smsNotificationsPromo: boolean = false;
  public acceptPrivayAndPolicyTerm: boolean = false;
  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<PrivacySettingEntity>) {
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
