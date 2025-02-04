import { IPayioDeviceChef } from './i-device-chef';

export interface IPayioDevice {
  // #region Properties (12)

  active: boolean;
  chef: IPayioDeviceChef | null;
  companyId: string;
  containerId: string;
  createdAt: Date;
  deviceId: string;
  id: string;
  lastAccess: Date;
  name: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;

  // #endregion Properties (12)
}
