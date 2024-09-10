export interface TaxConfig {
    name: string;
    shortName: string;
    crt: number;
    icms: {
        cst?: string,
        csosn?: string,
        value: number,
        iva: number,
        inCfop: string,
        outCfop: string,
    };
    pis:
    {
        cst: string,
        value: number,
    };
    cofins:
    {
        cst: string,
        value: number,
    };
}
