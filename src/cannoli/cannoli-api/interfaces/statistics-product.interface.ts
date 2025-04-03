import { IStatistics } from "./statistics.interface";

export interface StatisticsProduct extends IStatistics {
    totalBlend: number;
    totalTopping: number;
    activesSimple: number;
    totalSimple: number;
    activesParent: number;
    totalParent: number;
    activesInput: number;
    totalInput: number;
    activesChild: number;
    totalChild: number;
}
