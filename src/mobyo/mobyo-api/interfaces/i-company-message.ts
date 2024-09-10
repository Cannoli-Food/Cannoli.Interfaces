
import { CompanyMessageChannelEnum } from './company-message-channel.enum';

export class ICompanyMessage {
    // #region Properties (22)

    public id: string;
    public channelId: string;
    public nameSpace: string;
    public type: CompanyMessageChannelEnum;

    // #endregion Properties (22)
}

