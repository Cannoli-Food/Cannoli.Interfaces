import { EIFoodHandshakeDisputeAction } from "../enums/ifood-handshake-dispute-action.enum";
import { EIFoodHandshakeGroup } from "../enums/ifood-handshake-group.enum";
import { EIFoodHandshakeTimeoutAction } from "../enums/ifood-handshake-timeout-action.enum";
import { EIFoodHandshakeType } from "../enums/ifood-handshake-type.enum";
import { EIFoodNegotiationReasons } from "../enums/ifood-negotiation-reasons.enum";
import { IIFoodHandshakeAlternatives } from "./i-ifood-handshake-alternatives";
import { IIFoodHandshakeDisputeMetadataGarnishItem } from "./i-ifood-handshake-dispute-metadata-garnish-item";
import { IIFoodHandshakeDisputeMetadataItem } from "./i-ifood-handshake-dispute-metadata-item";
import { IIFoodHandshakeMedia } from "./i-ifood-handshake-media";

export interface IIFoodHandshakeDispute {
  id: string;
  parentDisputeId: string;
  action: EIFoodHandshakeDisputeAction;
  message: string;
  alternatives: IIFoodHandshakeAlternatives[];
  expiresAt: string | Date;
  createdAt: string | Date;
  handshakeType: EIFoodHandshakeType;
  handshakeGroup: EIFoodHandshakeGroup;
  timeoutAction: EIFoodHandshakeTimeoutAction;
  metadata: {
	item?: IIFoodHandshakeDisputeMetadataItem[];
	garnishItems?: IIFoodHandshakeDisputeMetadataGarnishItem[];
	evidences?: IIFoodHandshakeMedia[];
	acceptCancellationReasons?: EIFoodNegotiationReasons[];
  };
}