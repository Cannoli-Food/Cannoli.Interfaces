import { IDesenfilaPreferencePayerAddress } from './i-desenfila-preference-payer-address';
import { IDesenfilaPreferencePayerIdentification } from './i-desenfila-preference-payer-identification';
import { IDesenfilaPreferencePayerPhone } from './i-desenfila-preference-payer-phone';

export interface IDesenfilaPreferencePayer {
    // #region Properties (6)

    address: IDesenfilaPreferencePayerAddress,
    email: string,
    identification: IDesenfilaPreferencePayerIdentification,
    name: string,
    phone: IDesenfilaPreferencePayerPhone,
    surname: string,

    // #endregion Properties (6)
}
