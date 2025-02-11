import { EIFoodCatalogContext } from "../enums";

export interface IIFoodCatalog {
  catalogId: string,
  status: string, // AVAILABLE
  context: EIFoodCatalogContext[],
  modifiedAt: Date,
  groupId: string
}
