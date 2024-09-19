import { IMenuScheduleV2 } from './i-menu-schedule-v2';
import { ISectionMenu } from './i-section-menu';

export interface IMenuV2 {
    // #region Properties (15)

    active: boolean;
    companyId: string;
    containerId: string;
    createdAt: Date;
    id: string;
    imageHeaderURL: string;
    imageURL: string;
    /** Value input just on get all deviceMenus */
    index?: number;
    name: string;
    referenceId?: string;
    schedule: IMenuScheduleV2;
    sections?: ISectionMenu[];
    tags?: string[];
    updatedAt: Date;
    version: '1.0.2';

    // #endregion Properties (15)
}
