import { useState } from 'react';
import { ModalDialog } from '../../../ui';

interface IWithdrawFundsModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const WithdrawFundsModal = ({ onClose, onSuccess }: IWithdrawFundsModalProps) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleConfirmation = (): void => {
    setIsProcessing(true);
    console.log('handling confirmation of withdrawal...');
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
      title="Withdraw Funds"
      description="Enter the amount you wish to withdraw from your account."
      isOpen={true}
      onConfirm={handleConfirmation}
      onClose={handleClose}
    >
      Here will be WithdrawFundsModal content
    </ModalDialog>
  );
}