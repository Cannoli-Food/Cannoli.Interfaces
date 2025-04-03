import { IMerchantAddress } from "./i-merchant-address";

export interface IMerchant {
    keys: Array<{ field: string, value: string }>;
    deliveryAreas: any[];
    id: string; // "Identificador unico da loja",
    name: string; // Nome da loja
    phones: string[]; // Telefones da loja
    address: IMerchantAddress;
}
