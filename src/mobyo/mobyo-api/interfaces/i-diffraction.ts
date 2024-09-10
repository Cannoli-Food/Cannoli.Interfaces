export interface IDiffraction {
    id: string;
    name: string;
    items: IDiffractionVariation[];
    linkedProducts: number;
    containerId: string;
    companyId: string;
    createdAt: Date;
    version: string;
}

export interface IDiffractionVariation {
    linkedProducts: number;
    id: string;
    name: string;
    code: string;
    abreviation: string;
    fraction: boolean;
    fractionQuantity: number;
}
