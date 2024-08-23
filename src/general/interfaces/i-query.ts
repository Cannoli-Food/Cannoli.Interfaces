export interface IQuery {
    // #region Properties (12)

    apikey?: string | undefined | null;
    companyId?: string | undefined | null;
    containerId?: string | undefined | null;
    dateField?: string | null | undefined;
    endDate?: string;
    filterBy?: 'startDate' | 'endDate' | 'none';
    lastDocId?: string | undefined | null;
    limit: string;
    query?: string;
    sandbox?: 'true' | 'false' | 'undefined' | 'null' | '';
    startDate?: string;
    status?: string;

    // #endregion Properties (12)
}
