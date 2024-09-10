import { IProductChild } from '../../product-child/interfaces/product-child.interface';
import { IProductSimple } from '../../product-simple/interfaces/product-simple.interface';

export interface IProductParent extends IProductSimple {
    items: string[];
    variations: number;
    childs?: IProductChild[];
    diffractionId: string;
}
