import { useState } from 'react';
import { ModalDialog } from '../../../ui';

interface IConfirmPurchaseModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const ConfirmPurchaseModal = ({ onClose, onSuccess }: IConfirmPurchaseModalProps) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleConfirmation = (): void => {
    setIsProcessing(true);
    console.log('handling confirmation of purchasing sticker...');
    // TODO: temp emulation
    setTimeout(() => {
      setIsProcessing(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 3000);
  }

  const handleClose = (): void => {
    if (!isProcessing) {
      onClose();
    }
  }

  return (
    <ModalDialog
      title="Confirm Purchase"
      description="You are about to purchase the following sticker:"
      isOpen={true}
      onConfirm={handleConfirmation}
      onClose={handleClose}
    >
      Here will be ConfirmPurchaseModal content
    </ModalDialog>
  );
}