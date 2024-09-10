
import { IDeliveryArea } from '../../companies/interfaces/i-delivery-area';
import { CreateCustomerAddressDto } from '../dto/create-customer-address.dto';
import { factoryId } from './../../../shared/functions/factory-id.function';
import { ICustomerAddressCoordinates } from './i-customer-address-coordinates';
import { IAddress } from 'cecon-interfaces';

export function factoryCustomerAddress(body: CreateCustomerAddressDto): IAddress {
    if (!body) { return null; }
    const customerAddressData = {
        id: factoryId(),
        formattedAddress: body.streetName + (body.streetNumber ? (', ' + body.streetNumber) : '') + (body.complement ? (', ' + body.complement) : ''),
        state: body.state,
        city: body.city,
        country: body.country ? body.country : '',
        coords: body.coords,
        neighborhood: body.neighborhood,
        streetName: body.streetName,
        streetNumber: body.streetNumber,
        postalCode: body.postalCode,
        reference: body.reference ? body.reference : '',
        complement: body.complement ? body.complement : '',
        name: body.name ? body.name : '',
        isDefault: body.isDefault ? body.isDefault : false,
    } as IAddress;
    return customerAddressData;
}
