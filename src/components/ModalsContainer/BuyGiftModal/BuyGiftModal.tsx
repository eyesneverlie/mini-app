import { ModalDialog } from '../../../ui';
import { BuyGift } from '../../../components';

interface IBuyGiftModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const BuyGiftModal = ({ onClose, onSuccess }: IBuyGiftModalProps) => {
  return (
    <ModalDialog
      title='Buy Gift'
      description='Are you sure want to buy this gift?'
      isOpen={true}
      onConfirm={() => {
        console.log('clicked on Buy Gift');
        if (onSuccess) {
          onSuccess();
        }
      }}
      onClose={onClose}
      showActionButtons={true}
    >
      <BuyGift />
    </ModalDialog>
  );
};
