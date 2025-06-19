import { ModalDialog } from '../../../ui';
import { ICollection } from '../../../data-access';

interface ISaleDetailsModalProps {
  onClose: () => void;
  item?: ICollection;
}

export const SaleDetailsModal = ({ onClose, item }: ISaleDetailsModalProps) => {
  return (
    <ModalDialog title='Sale Details' isOpen={true} onClose={onClose}>
      {JSON.stringify(item)}
    </ModalDialog>
  );
};
