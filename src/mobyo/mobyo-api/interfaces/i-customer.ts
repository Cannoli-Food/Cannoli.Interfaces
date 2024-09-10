import { ICustomerMobyo } from 'cecon-interfaces';
import * as md5 from 'md5';
import { CompanyInfo } from '../../../framework/decorators/company-info';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { factoryCustomerAddress } from './i-customer-address';

export function factoryCustomer(
    companyInfo: CompanyInfo,
    body: CreateCustomerDto,
    confirmedPhone: boolean,
) {
    body.phoneNumber = body.phoneNumber.replace(/\D/g, '');
    const addresses = [];
    if (body.address) {
        addresses.push(factoryCustomerAddress(body.address));
    }
    const customerData = {
        active: true,
        addresses,
        companyId: companyInfo.companyId,
        containerId: companyInfo.containerId,
        createdAt: new Date(),
        doc: body.doc ? body.doc : '',
        docType: body.docType ? body.docType : '',
        email: body.email ? body.email : '',
        engines: ['MOBYO'],
        isTest: false,
        name: body.name || '',
        uid: body.uid || '',
        ordersCountOnRestaurant: 0,
        phoneNumber: body.phoneNumber || '',
        internationalCode: body.internationalCode || '+55',
        imageUrl: `https://www.gravatar.com/avatar/${md5(
            body.email || body.phoneNumber || body.name,
        )}?d=wavatar`,
        tags: tagsGenerator(body),
        updatedAt: new Date(),
        version: '1.0.2',
    } as ICustomerMobyo;
    if (body.phoneNumber.length === 13) {
        customerData.phoneNumber = removeInternationalCode(body.phoneNumber);
        customerData.internationalCode = getInternationalCode(body.phoneNumber);
    } else {
        customerData.phoneNumber = body.phoneNumber;
    }
    return customerData;
}

export const tagsGenerator = (
    customer: ICustomerMobyo | CreateCustomerDto,
): string[] => {
    if (!customer) {
        return [];
    }
    let tags = [];
    if (customer.doc) {
        tags.push(customer.doc);
        tags.push(customer.doc.replace(/\D/g, ''));
        tags.push(customer.doc.substring(0, 5));
        tags.push(customer.doc.substring(0, 5).replace(/\D/g, ''));
    }
    if (customer.phoneNumber) {
        const phone = customer.phoneNumber.replace(/\D/g, '');
        tags.push(phone);
        if (phone.length > 9) {
            tags.push(phone.substring(2));
        }
        if (phone.length === 8) {
            tags.push(phone.substring(0, 4));
        }
        if (phone.length === 9) {
            tags.push(phone.substring(0, 5));
        }
        if (phone.length === 10) {
            tags.push(phone.substring(2, 6));
        }
        if (phone.length === 11) {
            tags.push(phone.substring(2, 7));
            tags.push(phone.substring(0, 7));
        }
    }
    if (customer.email) {
        tags.push(customer.email);
    }
    if ((customer as any).name) {
        (customer as any).name = (customer as any).name.toLowerCase();
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[ÁÀÂÃ]', 'gi'),
            'a',
        );
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[ÉÈÊ]', 'gi'),
            'e',
        );
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[ÍÌÎ]', 'gi'),
            'i',
        );
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[ÓÒÔÕ]', 'gi'),
            'o',
        );
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[ÚÙÛ]', 'gi'),
            'u',
        );
        (customer as any).name = (customer as any).name.replace(
            new RegExp('[Ç]', 'gi'),
            'c',
        );
        (customer as any).name = (customer as any).name.toUpperCase();
        const words = (customer as any).name.split(' ');
        words.forEach((w: string) => {
            if (
                w.length > 2 &&
                w !== 'DE' &&
                w !== 'DA' &&
                w !== 'DO' &&
                w !== 'DAS' &&
                w !== 'DOS'
            ) {
                tags.push(w);
            }
        });
        let inits = (customer as any).name.substring(0, 4).toUpperCase();
        if (inits.length > 2) {
            tags.push(inits);
        }
    }
    return tags;
};

export const getInternationalCode = (phoneNumber: string): string => {
    if (!phoneNumber) {
        return '';
    }
    phoneNumber = '+' + phoneNumber;
    const matchingCode = internationalCodes().find((country) =>
        phoneNumber.startsWith(country?.code),
    );
    const phone = matchingCode ? matchingCode?.code : '+55';
    return phone;
};

export const removeInternationalCode = (phoneNumber: string): string => {
    if (!phoneNumber) {
        return '';
    }
    phoneNumber = '+' + phoneNumber;
    const matchingCode = internationalCodes().find((country) =>
        phoneNumber.startsWith(country?.code),
    );
    const phone = phoneNumber.replace(matchingCode?.code, '');
    return phone;
};

function internationalCodes() {
    return [
        { name: 'Brasil', code: '+55' },
        { name: 'Estados Unidos', code: '+1' },
        { name: 'Canadá', code: '+1' },
        { name: 'Reino Unido', code: '+44' },
        { name: 'Austrália', code: '+61' },
        { name: 'Alemanha', code: '+49' },
        { name: 'França', code: '+33' },
        { name: 'Japão', code: '+81' },
        { name: 'Índia', code: '+91' },
        { name: 'China', code: '+86' },
        { name: 'Russia', code: '+7' },
        { name: 'Portugal', code: '+351' },
        { name: 'Espanha', code: '+34' },
        { name: 'Itália', code: '+39' },

        // Adicione mais países conforme necessário
    ];
}
