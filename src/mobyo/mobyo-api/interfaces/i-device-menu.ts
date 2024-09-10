
import { IMenuScheduleV2 } from '../../../menus-v2/interfaces-v2/i-menu-schedule-v2';

export class IDeviceMenu {
    // #region Properties (5)

    public createdBy: string;
    public id: string;
    public index: number;
    public menuId: string;
    public schedule?: IMenuScheduleV2;

    // #endregion Properties (5)
}
