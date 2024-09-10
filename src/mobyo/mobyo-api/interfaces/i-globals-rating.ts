export interface IRating {
    // #region Properties (14)

    rate: number;
    companyId: string;
    member: {
        id: string;
        name: string;
        photoURL: string;
    };
    comment: string;
    createdAt: Date;
    id: string;

    // #endregion Properties (14)
}
