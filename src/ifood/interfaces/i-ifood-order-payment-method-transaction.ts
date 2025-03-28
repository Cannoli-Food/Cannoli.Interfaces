export interface IIFoodPaymentMethodTransaction {
  description?: string;
  /**
   * Credit card and/or subsidy transaction authorization
   * number (NFe cAut field)
   */
  authorizationCode: string;
  /**
   * CNPJ of the Transaction Intermediary
   * (agency, delivery platform, marketplace and similar)
   */
  acquirerDocument: string;
}
