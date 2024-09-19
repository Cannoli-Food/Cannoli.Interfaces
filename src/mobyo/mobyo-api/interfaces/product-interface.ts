import { IEntity } from "./i-entity";

export interface IProductBase extends IEntity {
    name: string;
    code: string;
    measure: string;
    imageURL: string;
    skill: 'SIMPLE' | 'PARENT' | 'CHILD' | 'INPUT' | 'TOPPING' | 'BLEND' | 'DIFFRACTION';
    containerId: string;
    description?: string;
    details: {
        organic: boolean,
        noGluten: boolean,
        noSugar: boolean,
        noDairy: boolean,
        sauceSpicy: number,
        vegetarian: boolean,
        vegan: boolean,
    };
    serving: number;
    isPaused: boolean;
    companyId: string;
    /**
   * @deprecated Use `preparationPlaceId` instead
   */
    preparationPlace: string;
    preparationPlaceId: string;
    questions: Array<{ id: string, sequence: number; }>;
}
