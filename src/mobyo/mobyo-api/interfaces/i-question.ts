import { EQuestionTypes } from '../enum/question-type.enum';
import { IQuestionOptionsV2 } from './i-question-options';

export interface IQuestionV2 {
  // #region Properties (14)

  active: boolean;

  additionalPrice: number;

  createdAt: Date;

  description: string;

  discount: number;

  id?: string;

  index?: number;

  max: number;

  mix: number;

  min: number;
  setAllToMax: boolean;
  skill: EQuestionTypes;

  name: string;
  options: IQuestionOptionsV2[];

  required?: boolean;

  updatedAt: Date;

  version: '1.0.2';
  tags: string[];

  // #endregion Properties (14)
}
