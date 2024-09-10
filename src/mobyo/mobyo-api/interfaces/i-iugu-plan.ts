
export interface IIuguPlan {
    id: string,
    name: string,
    identifier: string,
    interval: number,
    intervalType: string,
    createdAt: Date,
    updatedAt: Date,
    prices: IIuguPlanPrice[];
}
export interface IIuguPlanPrice {
    createdAt: Date,
    currency: string,
    id: string,
    updatedAt: Date,
    valueCents: number;
}
