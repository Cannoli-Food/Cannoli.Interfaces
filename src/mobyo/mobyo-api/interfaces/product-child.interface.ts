import { IProductSimple } from "./product-simple.interface";

export interface IProductChild extends IProductSimple {
    // #region Properties (5)

    diffractionId: string;
    diffractionItemCode: string;
    diffractionItemId?: string;
    diffractionItemName: string;
    parentId: string;

    // #endregion Properties (5)
}
