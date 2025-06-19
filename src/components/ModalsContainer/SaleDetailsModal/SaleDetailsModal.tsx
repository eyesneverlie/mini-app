import { ModalDialog } from "../../../ui";

interface ISaleDetailsModalProps {
  onClose: () => void;
}

export const SaleDetailsModal = ({ onClose }: ISaleDetailsModalProps) => {
  return (
    <ModalDialog title="Sale Details" isOpen={true} onClose={onClose}>
      Here will be SaleDetailsModal content
    </ModalDialog>
  );
};
