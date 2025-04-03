import { IProductChild } from "./product-child.interface";
import { IProductSimple } from "./product-simple.interface";

export interface IProductParent extends IProductSimple {
    items: string[];
    variations: number;
    childs?: IProductChild[];
    diffractionId: string;
}
