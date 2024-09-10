

export class IOrderIndoorV3 {
    // #region Properties (4)

    
    public deliveryDateTime: Date;
    
    public mode: 'DEFAULT' | 'TABLE' | 'TAB';
    
    public preferential: boolean;
    
    public table: string;
    
    public tab: string;

    // #endregion Properties (4)
}
export function factoryCartIndoorV2(deliveryDateTime: Date): IOrderIndoorV3 {
    return {
        mode: 'DEFAULT',
        deliveryDateTime,
        preferential: false,
        // Table identifier (if mode = TABLE)
        table: null,
        tab: null,
    } as IOrderIndoorV3;
}