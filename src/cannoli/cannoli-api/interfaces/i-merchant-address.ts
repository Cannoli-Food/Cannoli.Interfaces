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
