import { EEngineType } from '../enum/engine-type.enum';
import { IAction } from './action.interface';
import { IEngineCredential } from './i-engine-credential';
import { IEngineFees } from './i-engine-fees';
export interface IEngine {
  // #region Properties (12)

  actions: IAction[];
  active: boolean;
  autoConfirm: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date;
  credentials: IEngineCredential;
  fees: IEngineFees;
  id: string;
  name: string;
  type: EEngineType;
  updatedAt: Date;

  // #endregion Properties (12)
}
