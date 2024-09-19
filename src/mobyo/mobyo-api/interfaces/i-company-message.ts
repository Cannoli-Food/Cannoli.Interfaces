import { ECompanyMessageChannel } from "../enum/company-message-channel.enum";

export interface ICompanyMessage {
  // #region Properties (22)

  id: string;
  channelId: string;
  nameSpace: string;
  type: ECompanyMessageChannel;

  // #endregion Properties (22)
}
