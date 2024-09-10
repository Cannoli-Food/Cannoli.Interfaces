
import { IAction } from '../../../shared/services/action/action.interface';
import { EngineTypesEnum } from './engine-type.enum';
import { IEngineCredential } from './i-engine-credential';
import { IEngineFees } from './i-engine-fees';
export class IEngine {
    // #region Properties (16)

    public actions: IAction[];
    public active: boolean;
    
    public companyId: string;
    
    public containerId: string;
    public createdAt: Date;
    public credentials: IEngineCredential;
    
    public fees: IEngineFees;
    
    public id: string;
    
    public name: string;

    public type: EngineTypesEnum;
    
    public updatedAt: Date;
    

    // #endregion Properties (16)
}
