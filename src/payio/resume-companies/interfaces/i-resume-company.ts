import { IPayioResumeCompanyItem } from './i-resume-company-item';

export interface IPayioResumeCompany {
  id: string; // padrão AAAAMMDD
  createdAt: Date;
  updatedAt: Date;
  item: IPayioResumeCompanyItem;
  items: { id: string; item: IPayioResumeCompanyItem }[]; // id no padrão MM - DD - HH
}
