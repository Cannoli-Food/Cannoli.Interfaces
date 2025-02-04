export interface IPayioScheduleProduct {
  // #region Properties (11)

  code: string;
  description: string;
  // Preço fixo aplicado ao exceder o limite de peso
  exceededWeightMessageText: string | null;
  // Limite de peso para enviar mensagem
  exceededWeightPrice: number;
  helpYourSelf: boolean;
  id: string;
  // Texto associado à mensagem sonora
  price: number;
  unit: string;
  // Limite máximo de peso para aplicar regras
  weightLimitMessage: number;
  weightLimitPrice: number;

  // #endregion Properties (11)
}
