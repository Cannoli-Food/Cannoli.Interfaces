import { ICompany } from "./i-company";

export interface CompanyInfo {
    // #region Properties (8)

    companyId: string;
    companyName: string;
    containerId: string;
    internationalCode?: string;
    containerName: string;
    tokenId: string;
    memberEmail: string;
    phoneNumber: string;
    memberId: string;
    memberName: string;

    // #endregion   // #endregion Constructors (1)
}
