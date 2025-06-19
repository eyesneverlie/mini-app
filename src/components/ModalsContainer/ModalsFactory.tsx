import { ModalType } from '../../data-access';
import {
  ConfirmPurchaseModal,
  DepositFundsModal,
  SaleDetailsModal,
  WithdrawFundsModal,
} from '../ModalsContainer';

interface IModalsFactoryProps {
  type: ModalType | null;
  onClose: () => void;
  [key: string]: unknown;
}

export const ModalsFactory = ({
  type,
  onClose,
  ...rest
}: IModalsFactoryProps) => {
  switch (type) {
    case ModalType.ConfirmPurchase:
      return <ConfirmPurchaseModal onClose={onClose} {...rest} />;
    case ModalType.DepositFunds:
      return <DepositFundsModal onClose={onClose} {...rest} />;
    case ModalType.SaleDetails:
      return <SaleDetailsModal onClose={onClose} {...rest} />;
    case ModalType.WithdrawFunds:
      return <WithdrawFundsModal onClose={onClose} {...rest} />;
  }

  return null;
};
