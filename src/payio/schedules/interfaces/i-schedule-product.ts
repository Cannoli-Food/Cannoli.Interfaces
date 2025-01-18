export interface IPayioScheduleProduct {
  // #region Properties (9)

  code: string;
  description: string;
  id: string;
  maxWeightLimitPrice: number; // Limite máximo de peso para aplicar regras
  maxWeightLimitMessage: number; // Limite de peso para enviar mensagem
  exceededWeightPrice: number; // Preço fixo aplicado ao exceder o limite de peso
  exceededWeightMessageText: string | null; // Texto associado à mensagem sonora
  price: number;
  unit: string;

  // #endregion Properties (9)
}
