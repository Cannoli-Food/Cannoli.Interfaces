import { IIFoodHandshakeSelectedAlternatives } from "./i-ifood-handshake-selected-alternatives";

export interface IIFoodHandshake {
	id: string;
	disputeId: string;
	status: string;
	reason?: string;
	selectedDisputeAlternative?: IIFoodHandshakeSelectedAlternatives;
}