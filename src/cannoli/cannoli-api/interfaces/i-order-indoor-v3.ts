

export interface IOrderIndoorV3 {
    // #region Properties (4)

    
    deliveryDateTime: Date;
    
    mode: 'DEFAULT' | 'TABLE' | 'TAB';
    
    preferential: boolean;
    
    table: string;
    
    tab: string;

    // #endregion Properties (4)
}