import { ICompany } from '../../companies/interfaces/i-company';
import { factoryMerchantAddress, IMerchantAddress } from './i-merchant-address';

export interface IMerchant {
    keys: Array<{ field: string, value: string }>;
    deliveryAreas: any[];
    id: string; // "Identificador unico da loja",
    name: string; // Nome da loja
    phones: string[]; // Telefones da loja
    address: IMerchantAddress;
}

export function factoryMerchant(company: ICompany) {
    return {
        id: company.id,
        keys: company.keys || [],
        name: company.name,
        doc: company.doc,
        phones: [company.phoneNumber],
        deliveryAreas: company.deliveryArea,
        address: factoryMerchantAddress(company),
    } as IMerchant;
}
 