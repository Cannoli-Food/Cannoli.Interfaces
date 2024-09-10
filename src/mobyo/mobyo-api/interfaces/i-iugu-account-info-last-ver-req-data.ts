export interface IIuguAccountLastVerificationRequestData {
    price_range: string;
    physical_products: 'false' | 'true';
    business_type: string;
    person_type: 'Pessoa Física' | 'Pessoa Jurídica';
    automatic_transfer: 'false' | 'true';
    cpf: string;
    name: string;
    address: string;
    cep: string;
    city: string;
    state: string;
    telephone: string;
    bank: string;
    bank_ag: string;
    account_type: string;
    bank_cc: string;
    document_id: string;
    document_cpf: string;
    document_activity: string;
}
