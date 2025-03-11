import { IDesenfilaInfo } from "../interfaces";

export class DesenfilaInfoEntity implements IDesenfilaInfo {
    // #region Properties (6)
public merchantId: string = '';
public containerId: string = '';


    constructor(data?: Partial<DesenfilaInfoEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
}
