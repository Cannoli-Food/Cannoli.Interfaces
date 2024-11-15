export interface IGlobalSettingMaster {
  // #region Properties (15)

  deleteInvoicesPlacedDays: number;
  deleteSubscriptionsCompanyPlacedDays: number;
  deleteSubscriptionsCustomerPlacedDays: number;
  subscriptionSuspendedTimes: number;
  subscriptionsCompanyBillingDays: number;
  subscriptionsCompanyCancelDays: number;
  subscriptionsCompanyExpireDays: number;
  subscriptionsCompanySuspendDays: number;
  subscriptionsCustomerBillingDays: number;
  subscriptionsCustomerSuspendDays: number;
  waServerApikey: string;
  waServerBaseUrl: string;
  waServerGlobalKey: string;
  waServerInstanceName: string;
  id: string;
  waServerNumber: string;
  billingDays: number;
  resumeVersion: string;

  // #endregion Properties (15)
}
