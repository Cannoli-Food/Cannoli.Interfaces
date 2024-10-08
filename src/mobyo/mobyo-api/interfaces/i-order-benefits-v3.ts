import { EVoucherTargetTypes } from '../../../voucher';

export interface ISponsorshipValues {
  // #region Properties (2)

  name: string;

  value: number;

  // #endregion Properties (2)
}
export interface IOrderBenefitsV3 {
  // #region Properties (6)
  sponsorshipValues?: ISponsorshipValues[];

  target: EVoucherTargetTypes;

  value: number;

  // #endregion Properties (6)
}
