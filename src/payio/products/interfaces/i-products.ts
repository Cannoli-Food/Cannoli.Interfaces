export interface IPayioProduct {
  // #region Properties (13)

  active: boolean;
  brand: string;
  code: string;
  companyId: string;
  containerId: string | null;
  createdAt: Date;
  id: string;
  name: string;
  price: number;
  quantityPackaging: number;
  tags: string[];
  sandbox: boolean;
  thumbnail: string | null;
  unit: string;
  ncm: string | null;
  updatedAt: Date;
  weight: number;

  // #endregion Properties (13)
}
