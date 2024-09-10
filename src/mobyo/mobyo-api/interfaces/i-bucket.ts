

export class IBucket {
    // #region Properties (5)

    
    public active: boolean;
    
    public createdAt: number;
    
    public id: string;
    
    public tokenId: string;
    
    public updatedAt: number;

    // #endregion Properties (5)

    // #region Constructors (1)

    constructor() {
        this.active = true;
        this.createdAt = Date.now();
        this.id = '';
        this.tokenId = '';
        this.updatedAt = Date.now();
    }

    // #endregion Constructors (1)
}
