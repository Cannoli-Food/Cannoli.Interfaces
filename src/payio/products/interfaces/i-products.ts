export interface IPayioProduct {
  // #region Properties (13)

  active: boolean;
  brand: string;
  code: string;
  createdAt: Date;
  id: string;
  name: string;
  price: number;
  quantityPackaging: number;
  tags: string[];
  thumbnail: string | null;
  unit: string;
  updatedAt: Date;
  weight: number;

  // #endregion Properties (13)
}
