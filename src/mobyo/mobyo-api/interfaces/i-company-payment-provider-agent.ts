

export class ICompanyPaymentProviderAgent {
    // #region Properties (1)

    

    public accountId: string;

    // #endregion Properties (1)

    // #region Constructors (1)

    constructor(accountId: string) {
        this.accountId = accountId || '';
    }

    // #endregion Constructors (1)
}
