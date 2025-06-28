import { ModalType } from '../../data-access';
import {
  BuyGiftModal,
  ConfirmPurchaseModal,
  DepositFundsModal,
  SaleDetailsModal,
  WithdrawFundsModal,
  ProfileEarnTonModal,
  ProfileSettingsModal,
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
    case ModalType.BuyGift:
      return <BuyGiftModal onClose={onClose} {...rest} />;
    case ModalType.ProfileSettings:
      return <ProfileSettingsModal onClose={onClose} {...rest} />;
    case ModalType.ProfileEarnTon:
      return <ProfileEarnTonModal onClose={onClose} {...rest} />;
  }

  return null;
};
