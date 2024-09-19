import { IMenuScheduleV2 } from "./i-menu-schedule-v2";

export interface IDeviceMenu {
    // #region Properties (5)

    createdBy: string;
    id: string;
    index: number;
    menuId: string;
    schedule?: IMenuScheduleV2;

    // #endregion Properties (5)
}
