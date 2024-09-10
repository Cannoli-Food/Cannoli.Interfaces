import { ICompany } from '../../app/companies/interfaces/i-company';

export class CompanyInfo {
    // #region Properties (8)

    public companyId: string;
    public companyName: string;
    public containerId: string;
    public internationalCode?: string;
    public containerName: string;
    public tokenId: string;
    public memberEmail: string;
    public phoneNumber: string;
    public memberId: string;
    public memberName: string;

    // #endregion Properties (8)

    // #region Constructors (1)

    constructor(company: ICompany | null) {
        this.companyId = company?.id || '';
        this.companyName = company?.name || '';
        this.containerId = company?.containerId || '';
        this.containerName = '';
        this.tokenId = '';
        this.memberEmail = company?.email || '';
        this.phoneNumber = '';
        this.memberId = '';
        this.memberName = '';
    }

    // #endregion Constructors (1)
}
