
import { AddProductionPlacePrintInfoDto } from '../usercases/post/add/add-production-place-print-info.dto';

export class IProductionPlace {
    
    name: string;
    
    type: 'PRINT' | 'MONITOR';
    
    skill: 'IP' | 'SHARED';
    
    path: string;
    
    columns: number;
    
    active: boolean;
    
    companyId?: string;
    
    containerId?: string;
    
    createdAt: Date;
    
    id: string;
    
    updatedAt: Date;
    
    version?: string;
}

export function factoryProductionPlace(body: AddProductionPlacePrintInfoDto, type: 'PRINT' | 'MONITOR' = 'PRINT') {
    return {
        name: body.name,
        type,
    } as IProductionPlace;
}