

export interface IOrderItemOptionV3 {
    // #region Properties (15)

    
    ean: string;
    
    externalCode: string;
    
    id: string;
    
    index: number;
    
    name: string;
    options: IOrderItemOptionV3[];
    
    optionsPrice: number;
    
    preparationPlaceId: string;
    
    price: number;
    
    productId: string;
    
    quantity: number;
    
    skill: string;
    
    totalPrice: number;
    
    unit: string;
    
    weight: number;
    questionId?: string;

    // #endregion Properties (15)
}
