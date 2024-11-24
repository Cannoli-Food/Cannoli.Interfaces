export interface IPayioDevice {
  // #region Properties (10)

  active: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date;
  deviceId: string;
  id: string;
  lastAccess: Date;
  name: string;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (10)
}
