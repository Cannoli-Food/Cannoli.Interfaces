import { EIFoodHandshakeAlternativeType } from '../enums/ifood-handshake-alternative-type.enum';
import { EIFoodNegotiationReasons } from '../enums/ifood-negotiation-reasons.enum';

export interface IIFoodHandshakeAlternatives {
  id: string;
  type: EIFoodHandshakeAlternativeType;
  metadata: {
    maxAmount?: number;
    allowedsAdditionalTimeInMinutes?: number;
    allowedsAdditionalTimeReasons?: EIFoodNegotiationReasons[];
  };
}
