// src/models/base.entity.ts

import { INatiInfo } from "../interfaces";

export class NatiInfoEntity implements INatiInfo {
    // #region Properties (6)
public companyId: string = '';
public containerId: string = '';


    constructor(data?: Partial<NatiInfoEntity>) {
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
