

export class IOrderTakeoutV3 {
    // #region Properties (4)

    
    identification?: string;
    
    public mode: 'DEFAULT' | 'PICKUP_AREA';
    
    public preferential: boolean;
    
    public takeoutDateTime: string;

    // #endregion Properties (4)
}

export const factoryOrderTakeoutV3 = (takeoutDateTime: string): IOrderTakeoutV3 => {
    return {
        mode: 'DEFAULT',
        takeoutDateTime,
        preferential: false,

        // Table identifier (if mode = TABLE)
        identification: null,
    } as IOrderTakeoutV3;
};