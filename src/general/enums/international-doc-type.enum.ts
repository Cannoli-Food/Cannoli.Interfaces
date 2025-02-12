export enum EIntDocType {
  // América do Sul
  CPF = 'CPF', // Brasil (Pessoa Física)
  CNPJ = 'CNPJ', // Brasil (Empresa)
  CUIL = 'CUIL', // Argentina (Pessoa Física)
  CUIT = 'CUIT', // Argentina (Empresa)
  RUT_CL = 'RUT_CL', // Chile (Pessoa e Empresa)
  NIT_CO = 'NIT_CO', // Colômbia (Empresa)
  RUC_EC = 'RUC_EC', // Equador (Empresa)
  RUC_PE = 'RUC_PE', // Peru (Empresa)
  RUT_UY = 'RUT_UY', // Uruguai (Empresa)
  RUC_PY = 'RUC_PY', // Paraguai (Empresa)
  RIF_VE = 'RIF_VE', // Venezuela (Empresa)
  NIT_BO = 'NIT_BO', // Bolívia (Empresa)

  // América do Norte
  SSN = 'SSN', // EUA (Pessoa Física)
  EIN = 'EIN', // EUA (Empresa)
  RFC = 'RFC', // México (Empresa e Pessoa Física)

  // Europa
  STEUER_ID = 'STEUER_ID', // Alemanha (Pessoa Física)
  UST_IDNR = 'UST_IDNR', // Alemanha (Empresa - VAT)
  SIREN = 'SIREN', // França (Pessoa Física)
  SIRET = 'SIRET', // França (Empresa)
  NIF_ES = 'NIF_ES', // Espanha (Pessoa Física)
  CIF_ES = 'CIF_ES', // Espanha (Empresa)
  CODICE_FISCALE = 'CODICE_FISCALE', // Itália (Pessoa Física)
  P_IVA = 'P_IVA', // Itália (Empresa)
  NINO = 'NINO', // Reino Unido (Pessoa Física)
  VAT_UK = 'VAT_UK', // Reino Unido (Empresa - VAT)
  BSN = 'BSN', // Países Baixos (Pessoa Física)
  KVK = 'KVK', // Países Baixos (Empresa)
  AHV = 'AHV', // Suíça (Pessoa Física - Seguro Social)
  UID_CH = 'UID_CH', // Suíça (Empresa)
  NIF_PT = 'NIF_PT', // Portugal (Pessoa Física e Empresa)

  // África
  ID_ZA = 'ID_ZA', // África do Sul (Pessoa Física)

  // Rússia
  INN_PERSON = 'INN_PERSON', // Rússia (Pessoa Física)
  INN_COMPANY = 'INN_COMPANY', // Rússia (Empresa)
}
