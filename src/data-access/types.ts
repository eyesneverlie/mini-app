
export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
  price: number;
  isSelected?: boolean;
}

export interface IApiProductItem {
  attrs: unknown[];
  categoryId: string;
  createdAt: number;
  id: string;
  imageUrl: string;
  name: string;
  prices: {
    amount: string;
    currencyId: string;
    height: number;
    providerId: string;
  }[];
}

export interface IGetProductsResponse {
  total: number;
  items: IApiProductItem[];
}

export interface ICategory {
  createdAt: number;
  id: string;
  imageUrl: string;
  name: string;
  parentId: string | null;
  priority: number;
}

export interface IGetCategoriesResponse {
  total: number;
  items: ICategory[];
}

export type SwitchableSegment = { id: string; name: string };

export type Volume = 'up' | 'down';

export type Period = '24h' | 'week' | 'month';

export enum ModalType {
  ConfirmPurchase = 'confirmPurchase',
  WithdrawFunds = 'withdrawFunds',
  DepositFunds = 'depositFunds',
  SaleDetails = 'saleDetails',
  BuyGift = 'buyGift',
  ProfileSettings = 'profileSettings',
  ProfileEarnTon = 'profileEarnTon',
}