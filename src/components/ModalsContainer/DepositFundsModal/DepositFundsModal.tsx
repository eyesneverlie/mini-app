import { useState } from "react";
import { ModalDialog } from "../../../ui";

interface IDepositFundsModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const DepositFundsModal = ({
  onClose,
  onSuccess,
}: IDepositFundsModalProps) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleConfirmation = (): void => {
    setIsProcessing(true);
    console.log("handling confirmation of deposit sticker...");
    // TODO: temp emulation
    setTimeout(() => {
      setIsProcessing(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 3000);
  };

  const handleClose = (): void => {
    if (!isProcessing) {
      onClose();
    }
  };

  return (
    <ModalDialog
      title="Deposit Funds"
      description="Enter the amount you wish to deposit to your account."
      isOpen={true}
      onConfirm={handleConfirmation}
      onClose={handleClose}
    >
      Here will be DepositFundsModal content
    </ModalDialog>
  );
};
