
export interface IProductionPlace {
    
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