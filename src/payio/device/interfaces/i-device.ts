import { IPayioDeviceChef } from './i-device-chef';

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
  chef: IPayioDeviceChef | null;
  updatedAt: Date;

  // #endregion Properties (10)
}
