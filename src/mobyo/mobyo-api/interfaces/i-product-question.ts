import { IQuestionV2 } from "./i-question";

export interface IProductQuestion {
    // #region Properties (12)

    
    questionId: string;
    
    id: string;
    question?: IQuestionV2;
    
    index: number;
    
    updatedAt: Date;
    
    updatedBy: string;
    
    version: '1.0.2';

    // #endregion Properties (12)
}