
export interface IIuguChangePlanSimulation {
    cost: number,
    discount: number,
    cycles: number,
    expiresAt: Date,
    newPlan: string,
    oldPlan: string;
}