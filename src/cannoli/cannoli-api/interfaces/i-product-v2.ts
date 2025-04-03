import { EProductHighlight } from '../enum/product-highlight-v2.enum';
import { EProductSkillV2 } from '../enum/product-skill-v2.enum';
import { IProductComposition } from './i-product-composition';
import { IProductDetailV2 } from './i-product-detail-v2';
import { IProductOptionsV2 } from './i-product-options-v2';
import { IProductQuestion } from './i-product-question';
import { IProductSizesV2 } from './i-product-sizes-v2';

export interface IProductV2 {
  // #region Properties (24)

  active: boolean;

  code: string;

  companyId?: string;
  composition: IProductComposition[];

  containerId: string;

  createdAt: Date;

  description?: string;
  details: IProductDetailV2;

  id?: string;
  highlights?: EProductHighlight[];

  imageURL?: string;

  measure: string;

  name: string;
  options: IProductOptionsV2;

  preparationPlaceId?: string;

  price: number;
  questions?: IProductQuestion[];

  serving: number;
  sizes: IProductSizesV2[];
  skill: EProductSkillV2;
  tags?: Array<string>;
  tags2?: Array<string>;
  customTags?: Array<string>;

  updatedAt?: Date;

  updatedBy?: string;

  version: string;

  weight: number;

  // #endregion Properties (24)
}
