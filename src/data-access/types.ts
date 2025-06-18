// TODO: replace with a proper one once we figured it out
export interface INft {
  image: string;
  title: string;
  id: number;
  description: string;
}

export enum ModalType {
  ConfirmPurchase = 'confirmPurchase',
  WithdrawFunds = 'withdrawFunds',
  DepositFunds = 'depositFunds',
  SaleDetails = 'saleDetails',
}