

export class IDeviceCheckoutPicture {
    // #region Properties (9)
    
    default: string;
    
    maintenance: string;
    
    sidebar: string;
    
    userblock: string;
    
    header: string;
    
    banners: Array<string>;

    // #endregion Properties (9)
}

export const factoryDevicePicture = (): IDeviceCheckoutPicture => {
    return {
        default: 'https://firebasestorage.googleapis.com/v0/b/mobyo-00001.appspot.com/o/default%2Fmain-default.webp?alt=media',
        maintenance: 'https://firebasestorage.googleapis.com/v0/b/mobyo-00001.appspot.com/o/default%2Fmaintenance.webp?alt=media',
        sidebar: 'https://firebasestorage.googleapis.com/v0/b/mobyo-00001.appspot.com/o/default%2Fsidebar.webp?alt=media&token=9902ebc2-bfff-4f69-a557-4138f3327362',
        userblock: 'https://firebasestorage.googleapis.com/v0/b/mobyo-00001.appspot.com/o/default%2Fsidebar.webp?alt=media&token=9902ebc2-bfff-4f69-a557-4138f3327362',
        header: null,
        banners: []
    };
};