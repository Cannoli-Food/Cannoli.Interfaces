import { IPrivacySetting } from '../interfaces/i-customer-privacy';

export class PrivacySettingEntity implements IPrivacySetting {
  // #region Properties (9)

  public orderNotifications: boolean = true;
  public pushNotificationsPromo: boolean = true;
  public emailNotificationsPromo: boolean = true;
  public whatsAppNotificationsPromo: boolean = true;
  public smsNotificationsPromo: boolean = true;
  public acceptPrivayAndPolicyTerm: boolean = true;
  public acceptPrivayAndPolicyTermAt: Date = new Date();
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
