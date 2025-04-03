

export interface IOrderTakeoutV3 {
    // #region Properties (4)

    
    identification?: string;
    
    mode: 'DEFAULT' | 'PICKUP_AREA';
    
    preferential: boolean;
    
    takeoutDateTime: string;

    // #endregion Properties (4)
}