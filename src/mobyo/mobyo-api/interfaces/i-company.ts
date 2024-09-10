import {
  Allow,
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { IPaymentMethod } from "../../payments/interface/i-payment-method";
import { CreateCompanyDto } from "../dto/create-company.dto";
import { ICompanyAddress } from "./i-company-address";
import { ICompanyCoords } from "./i-company-coords";
import { ICompanyKeys } from "./i-company-keys";
import { ICompanyMessage } from "./i-company-message";
import { ICompanyPaymentProvider } from "./i-company-payment-provider";
import { IDeliveryArea } from "./i-delivery-area";
import { IDeliveryAreaFixed } from "./i-delivery-area-fixed";
import { OrderDeliveredByEnum } from "../../order-v3/interfaces-v3/order-delivered-by.enum";
import { IDesenfila } from "cecon-interfaces";

export class ICompany {
  // #region Properties (22)

  public active?: boolean;

  public address: ICompanyAddress;

  public containerId: string;

  public coords: ICompanyCoords;

  public createdAt: number;

  public deliveryArea: IDeliveryArea[];

  public deliveryAreaFixed: IDeliveryAreaFixed;

  public defaultDeliveredBy: OrderDeliveredByEnum;

  public desenfila: IDesenfila;

  public doc: string;

  public docType: "CPF" | "CNPJ";

  public email: string;

  public id: string;

  imageURL?: string;

  public isTest: boolean;

  keys?: ICompanyKeys[];

  public message?: ICompanyMessage[];

  public name: string;
  public paymentProvider: ICompanyPaymentProvider;
  public payments: IPaymentMethod[];

  public internationalCode?: string;

  public phoneNumber: string;

  public preparationTime: number;

  public requestPreparationTime: boolean;

  public updatedAt: number;

  public version?: string;

  // #endregion Properties (22)

  // #region Constructors (1)

  constructor(body: CreateCompanyDto, containerId: string) {
    this.active = true;
    this.address = new ICompanyAddress(body.address);
    this.containerId = containerId;
    this.coords = new ICompanyCoords(body.coords);
    this.createdAt = null;
    this.deliveryArea = [];
    this.deliveryAreaFixed = null;
    this.doc = body.doc;
    this.docType = body.doc.length === 11 ? "CPF" : "CNPJ";
    this.email = body.email;
    this.id = "";
    this.imageURL = "";
    this.isTest = false;
    this.keys = [];
    this.name = body.name;
    this.message = [];
    this.paymentProvider = new ICompanyPaymentProvider(null);
    this.payments = [];
    this.phoneNumber = body.phoneNumber || null;
    this.preparationTime = 30;
    this.requestPreparationTime = false;
    this.updatedAt = null;
    this.version = "";
  }

  // #endregion Constructors (1)
}
