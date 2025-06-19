// TODO: replace with a proper one once we figured it out
export interface ICollection {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

export type SegmentType = 'gift' | 'stickers';

export enum ModalType {
  ConfirmPurchase = 'confirmPurchase',
  WithdrawFunds = 'withdrawFunds',
  DepositFunds = 'depositFunds',
  SaleDetails = 'saleDetails',
}