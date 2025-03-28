import { IIFoodOrderDeliveryAddressCoordinates } from "./i-ifood-order-delivery-address-coordinates";

export interface IIFoodOrderDeliveryAddress {
	reference?: string,
	/**
	 * ISO 3166 country code (e.g. BR, CO, etc.)
	 */
	country: string,
	streetName: string;
	formattedAddress: string;
	streetNumber: string;
	city: string;
	postalCode: string;
	coordinates: IIFoodOrderDeliveryAddressCoordinates;
	neighborhood?: string;
	state: string;
	complement?: string;
}