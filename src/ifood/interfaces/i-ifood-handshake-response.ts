import { EIFoodHandshakeStatus } from "../enums";
import { IIFoodHandshakeSelectedAlternatives } from "./i-ifood-handshake-selected-alternatives";

export interface IIFoodHandshake {
	id: string;
	disputeId: string;
	status: EIFoodHandshakeStatus;
	reason?: string;
	selectedDisputeAlternative?: IIFoodHandshakeSelectedAlternatives;
}