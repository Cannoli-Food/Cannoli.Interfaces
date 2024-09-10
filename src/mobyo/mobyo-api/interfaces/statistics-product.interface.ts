import { Statistics } from '../../../shared/services/repository/statistics.interface';

export interface StatisticsProduct extends Statistics {
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
