export interface IPhoneDetails {
    products: IProduct[];
}

export interface IProduct {
  title: string;
  sku: string;
  id: string;
  type: string;
  name: string;
  imageSrc: string;
  brand: string;
  model: string;
  colorCode: string;
  summary: string;
  productType: string;
  catalogPriority: string;
  initialPhonePrice: IinitialPhonePrice;
  initialPlan: IinitialPlan;
  preOrder: boolean;
  outOfPlan: boolean;
  hasDiscount: boolean;
  planItem: string;
  fieldItems: string[];
  specifications: ISpecifications[];
  variants: IVariants[];
}

export interface IinitialPhonePrice {
  value: string;
  currency: string;
}

export interface IinitialPlan {
  planName: string;
  planPrice: string;
  currency: string;
}

export interface ISpecifications {
  id: string;
  name: string;
  type: string;
  value: string;
}

export interface IVariants {
  colour: string;
  colorCode: string;
  phoneImages: string[];
  pricingOptions: IPricingOptions[];
}

export interface IPricingOptions {
  capacity: string;
  outOfStock: false;
  price: IPrice[];
}

export class IPrice {
  planName: string;
  planPrice: string;
  phonePrice: string;
  currency: string;
}
