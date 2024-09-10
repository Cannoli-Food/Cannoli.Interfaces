
import { Allow } from 'class-validator';
import { ICompany } from './i-company';
import { ICompanyPaymentProviderAgent } from './i-company-payment-provider-agent';
import { ICompanyPaymentProviderPaymentMethod } from './i-company-payment-providers-payments-method';

export class ICompanyPaymentProvider {
    // #region Properties (11)

    
    public accountId: string;
    
    
    public active: boolean;
    public agent: ICompanyPaymentProviderAgent;
    
    public customerId: string;
    
    public liveApiToken: string;
    
    public name: string;
    
    public paymentsMethods: ICompanyPaymentProviderPaymentMethod[];
    
    public subscriptionId: string;
    
    public testApiToken: string;
    
    public userToken: string;
    
    public verified: boolean;
    
    public verifiedAt: number;

    // #endregion Properties (11)

    // #region Constructors (1)

    constructor(body: ICompany | null) {
        this.active = body?.paymentProvider?.active || false;
        this.accountId = body?.paymentProvider?.accountId || '';
        this.agent = new ICompanyPaymentProviderAgent(body?.paymentProvider?.agent?.accountId || '');
        this.customerId = body?.paymentProvider?.customerId || '';
        this.liveApiToken = body?.paymentProvider?.liveApiToken || '';
        this.name = body?.paymentProvider?.name || 'IUGU';
        this.subscriptionId = body?.paymentProvider?.subscriptionId || '';
        this.testApiToken = body?.paymentProvider?.testApiToken || '';
        this.userToken = body?.paymentProvider?.userToken || '';
        this.verified = body?.paymentProvider?.verified || false;
        this.verifiedAt = body?.paymentProvider?.verifiedAt || Date.now();
        this.paymentsMethods = body?.paymentProvider?.paymentsMethods || [];
    }

    // #endregion Constructors (1)
}

export const factoryPaymentProvider = (body: ICompanyPaymentProvider, agentAccountId: string): ICompanyPaymentProvider => {
    return {
        active: body.active || false,
        accountId: body?.accountId || null,
        agent: {
            accountId: agentAccountId || null,
        },
        customerId: body?.customerId || null,
        liveApiToken: body?.liveApiToken || null,
        name: body?.name || 'IUGU',
        subscriptionId: body?.subscriptionId || null,
        testApiToken: body?.testApiToken || null,
        userToken: body?.userToken || null,
        verified: body?.verified || false,
        verifiedAt: body?.verifiedAt || null,
        paymentsMethods: body?.paymentsMethods || [],
    };
};
