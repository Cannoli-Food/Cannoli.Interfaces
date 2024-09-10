import { ICompany } from '../../companies/interfaces/i-company';

export interface IMerchantAddress {
    formattedAddress: string; // Endereço completo da loja
    country: 'BRASIL'; // Pais
    state: string; // "Estado",
    city: string; // "Cidade",
    neighborhood: string; // "Bairro",
    streetName: string; // "Endereço (Tipo logradouro + Logradouro)",
    streetNumber: string; // "Numero",
    postalCode: string; // "CEP"
}

export function factoryMerchantAddress(company: ICompany) {
    const a = company.address;
    return {
        city: a.city,
        country: 'BRASIL',
        formattedAddress: `${a.streetName}, ${a.streetNumber} - ${a.district}`,
        neighborhood: a.district,
        postalCode: a.zipCode,
        state: a.state,
        streetName: a.streetName,
        streetNumber: a.streetNumber,
    } as IMerchantAddress;
}
