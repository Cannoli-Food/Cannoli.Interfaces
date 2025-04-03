import { EPreferenceAutoReturn } from '../enum/preference-auto-return.enum';
import { IDesenfilaPreferenceItem } from './i-desenfila-preference-item';
import { IDesenfilaPreferencePayer } from './i-desenfila-preference-payer';
import { IDesenfilaPreferencePayerPayment } from './i-desenfila-preference-payer-payment';

export interface IDesenfilaPreference {
  // #region Properties (13)

  additional_info: string;
  auto_return: EPreferenceAutoReturn;
  back_urls: {
    success: string;
    pending: string;
    failure: string;
  };
  /**
   * Você pode ativar o modo binário se o modelo de negócios exigir
   * que a aprovação do pagamento seja instantânea.
   * Dessa forma, o pagamento só poderá ser aprovado ou recusado.
   *
   * Se o modo binário estiver desativado, o pagamento poderá ficar
   * pendente (no caso de exigir qualquer ação do comprador)
   * ou em processo (se for necessária uma revisão manual).
   */
  binary_mode: boolean;
  client_id: string;
  collector_id: string;
  coupon_code: any;
  coupon_labels: any;
  date_created: string;
  date_of_expiration: string;
  expiration_date_from: string;
  expiration_date_to: string;
  expires: boolean;
  external_reference: string;
  id: string;
  init_point: string;
  items: IDesenfilaPreferenceItem[];
  marketplace: string;
  marketplace_fee: number;
  metadata: any;
  notification_url: string;
  payer: IDesenfilaPreferencePayer;
  /**
   * Classe que descreve os atributos e métodos de meios de pagamento do Checkout Pro.
   */
  payment_methods: IDesenfilaPreferencePayerPayment;
  /**
   * Descrição na fatura do cartão comprador
   */
  statement_descriptor: string;
  total_amount: any;

  // #endregion Properties (13)
}
