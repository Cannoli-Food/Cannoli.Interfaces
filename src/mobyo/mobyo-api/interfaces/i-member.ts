import { IEntity } from '../../../entities/i-entity';
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { AddMemberDto } from '../dto/add-member.dto';
import { MemberRulesEnum } from './member-rules.enum';

export class IMember extends IEntity {
    // #region Properties (8)

    companyName: string;
    containerName: string;
    email: string;
    name: string;
    phone: string;
    internationalCode: string;
    phoneConfirmed: boolean;
    photoURL: string;
    rule: MemberRulesEnum;
    user?: any;
    userId: string;
    constructor(ICompanyInfo: CompanyInfo, body: AddMemberDto) {
        super();
        this.containerId = ICompanyInfo.containerId;
        this.companyId = ICompanyInfo.companyId;
        this.containerName = ICompanyInfo.containerName || '';
        this.companyName = ICompanyInfo.companyName;
        this.email = body.email || '';
        this.phone = body.phoneNumber || '';
        this.internationalCode = body.internationalCode || '';
        this.name = body.name || '';
        this.rule = body.rule || MemberRulesEnum.user;
        this.userId = body.userId || '';
    }

    // #endregion Properties (8)
}
