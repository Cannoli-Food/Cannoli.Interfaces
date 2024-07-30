import { EDesenfilaFrom, EDocType } from '../../general';
import { ISponsorFee } from './i-sponsor-fee';
export interface ISponsor {
  id: string;
  fee: ISponsorFee[];
  createdAt: Date;
  name: string;
  doc: string;
  docType: EDocType;
  from: EDesenfilaFrom;
  desenfilaRefId: string | null;
  natiRefId: string | null;
  mobyoRefId: string | null;
}
