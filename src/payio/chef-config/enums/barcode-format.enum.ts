export enum EBarcodeFormat {
  CODE_4_PRICE_5 = 'FCCCCTTTTT', // Código do produto (4 dígitos), preço total (5 dígitos)
  CODE_4_PRICE_6 = 'FCCCCTTTTTT', // Código do produto (4 dígitos), preço total (6 dígitos)
  CODE_4_WEIGHT = 'FCCCCPPPPP', // Código do produto (4 dígitos), peso (5 dígitos)

  CODE_5_PRICE_5 = 'FCCCCCTTTTT', // Código do produto (5 dígitos), preço total (5 dígitos)
  CODE_5_PRICE_6 = 'FCCCCCTTTTTT', // Código do produto (5 dígitos), preço total (6 dígitos)
  CODE_5_WEIGHT = 'FCCCCCPPPPP', // Código do produto (5 dígitos), peso (5 dígitos)

  CODE_6_PRICE_5 = 'FCCCCCCTTTTT', // Código do produto (6 dígitos), preço total (5 dígitos)
  CODE_6_PRICE_6 = 'FCCCCCCTTTTTT', // Código do produto (6 dígitos), preço total (6 dígitos)
  CODE_6_WEIGHT = 'FCCCCCCPPPPP', // Código do produto (6 dígitos), peso (5 dígitos)
}
