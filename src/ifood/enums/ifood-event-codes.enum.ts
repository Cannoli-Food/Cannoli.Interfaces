export enum EIFoodEventCodes {
  // #region ORDER_STATUS

  /**
   * PLACED
   */
  PLC = 'PLC',
  /**
   * CONFIRMED
   */
  CFM = 'CFM',
  /**
   * SEPARATION_STARTED
   */
  SPS = 'SPS',
  /**
   * SEPARATION_ENDED
   */
  SPE = 'SPE',
  /**
   * READY_TO_PICKUP
   */
  RTP = 'RTP',
  /**
   * DISPATCHED
   */
  DSP = 'DSP',
  /**
   * CONCLUDED
   */
  CON = 'CON',
  /**
   * CANCELLED
   */
  CAN = 'CAN',

  // #endregion

  // #region DELIVERY

  /**
   * DELIVERY_DROP_CODE_REQUESTED
   */
  DDCR = 'DDCR',

  // #endregion
}
