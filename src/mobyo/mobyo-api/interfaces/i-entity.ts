export class IEntity {
    active?: boolean;
    companyId?: string;
    containerId?: string;
    createdAt: Date | number = new Date();
    id: string = '';
    updatedAt: Date | number = new Date();
    version?: string;
}
