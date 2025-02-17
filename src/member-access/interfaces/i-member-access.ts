export interface IMemberAccess {
  // #region Properties (15)

  accessCount: number | null;
  active: boolean;
  companyId: string;
  companyName: string;
  containerId: string | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  lastAccessAt: Date | null;
  name: string;
  roles: any[];
  tags: string[];
  updated: Date;
  userId: string;

  // #endregion Properties (15)
}
