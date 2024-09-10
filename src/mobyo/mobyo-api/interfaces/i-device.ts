
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { IPaymentMethod } from '../../payments/interface/i-payment-method';
import { CreateDeviceAppDto } from '../dto/create-app.dto';
import { CreateDeviceCheckoutConfigsDto } from '../dto/create-checkout-configs.dto';
import { CreateDeviceCheckoutPicturesDto } from '../dto/create-checkout-pictures.dto';
import { CreateDeviceCheckoutDto } from '../dto/create-checkout.dto';
import { CreateDeviceScreenDto } from '../dto/create-screen.dto';
import { CreateDeviceDto } from '../dto/create.dto';
import { DeviceAdjustValueDto } from '../dto/device-adjust-value.dto';
import { DeviceAppModeEnum } from './device-app-mode.enum';
import { DeviceCheckoutStatusEnum } from './device-checkout-status.enum';
import { DeviceCustomerNameEnum } from './device-customer-name.enum';
import { DeviceModeEnum } from './device-mode.enum';
import { DeviceScreenModeEnum } from './device-screen-mode.enum';
import { DeviceTefTypeEnum } from './device-tef-type.enum';
import { IDeviceApp } from './i-device-app';
import { IDeviceCheckout } from './i-device-checkout';
import { IDeviceCheckoutConfig } from './i-device-checkout-configs';
import { IDeviceCheckoutPicture } from './i-device-checkout-picture';
import { IDeviceScreen } from './i-device-screen';

export class IDevice {
    // #region Properties (15)

    
    public active?: boolean;
    adjustValue: DeviceAdjustValueDto;
    public app?: IDeviceApp;
    public checkout?: IDeviceCheckout;
    
    public companyId: string;
    
    public containerId: string;
    
    public createdAt: Date;
    
    public createdBy: string;
    
    public deviceId: string;
    
    public id: string;
    
    public key: string;
    
    public lastAccess: Date;
    
    public mode: DeviceModeEnum;
    public name: string;
    public screen?: IDeviceScreen;
    
    public updatedAt: Date;

    // #endregion Properties (15)
}

export const factoryDeviceConfigsPaymentsOffline = (
    payments: IPaymentMethod[],
): IPaymentMethod[] => {
    return payments.map((payment) => {
        return new IPaymentMethod(payment);
    });
};
export const factoryDevice = (
    companyInfo: CompanyInfo,
    obj: CreateDeviceDto,
    desenfilaToken: boolean,
): IDevice => ({
    active: true,
    adjustValue: obj?.adjustValue || null,
    companyId: companyInfo.companyId,
    containerId: companyInfo.containerId,
    createdAt: new Date(),
    createdBy:
        obj?.deviceId || companyInfo.memberName || companyInfo.memberEmail,
    screen: obj?.screen ? factoryDeviceScreen(obj.screen) : null,
    app: obj?.app ? factoryDeviceApp(obj.app, desenfilaToken) : null,
    checkout: obj?.checkout ? factoryDeviceCheckout(obj.checkout) : null,
    deviceId: obj?.deviceId || '',
    key: obj?.key || '',
    mode: obj?.mode,
    id: null,
    lastAccess: new Date(),
    name: obj?.name || obj?.deviceId || '',
    updatedAt: new Date(),
});
export const factoryDeviceApp = (
    obj: CreateDeviceAppDto,
    desenfilaToken: boolean,
): IDeviceApp => ({
    mode: obj?.mode || DeviceAppModeEnum.delivery,
    configs: {
        paymentsOffline: [],
        checkoutOnline: desenfilaToken ? true : false,
        checkoutOffline: true,
        checkoutPix: desenfilaToken ? true : false,
    },
});
export const factoryDeviceScreen = (
    obj: CreateDeviceScreenDto,
): IDeviceScreen => ({
    board: [],
    mode: obj?.mode || DeviceScreenModeEnum.ordersScreen,
    lateTime: obj?.lateTime || 10,
    soundVolume: obj?.soundVolume || 5,
});
export const factoryDeviceCheckout = (
    obj: CreateDeviceCheckoutDto,
): IDeviceCheckout => ({
    configs: factoryDeviceCheckoutConfigs(obj?.configs),

    pictures: factoryDeviceCheckoutPictures(obj?.pictures),
    status: obj?.status || DeviceCheckoutStatusEnum.production,
});
export const factoryDeviceCheckoutConfigs = (
    obj: CreateDeviceCheckoutConfigsDto,
): IDeviceCheckoutConfig => ({
    customerName: obj?.customerName || DeviceCustomerNameEnum.required,
    paymentsOffline: obj?.paymentsOffline || [],
    paymentsOnline: obj?.paymentsOnline || {
        cash: true,
        creditCard: true,
        debitCard: true,
        voucher: true,
        pix: true,
    },
    showReceiptDoc: obj?.showReceiptDoc || true,
    tef: obj?.tef || {
        type: DeviceTefTypeEnum.none,
        api: {
            port: 0,
            url: '',
        },
    },
});
export const factoryDeviceCheckoutPictures = (
    obj: CreateDeviceCheckoutPicturesDto,
): IDeviceCheckoutPicture => ({
    banners: obj?.banners || [],

    default: obj?.default || '',

    header: obj?.header || '',

    maintenance: obj?.maintenance || '',

    sidebar: obj?.sidebar || '',

    userblock: obj?.userBlock || '',
});
