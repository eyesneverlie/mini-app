import { ModalDialog } from '../../../ui';
import { ICollection } from '../../../data-access';
import { ProductDetails } from '../../../components';

interface ISaleDetailsModalProps {
  onClose: () => void;
  item?: ICollection;
}

export const SaleDetailsModal = ({ onClose, item }: ISaleDetailsModalProps) => {
  return (
    <ModalDialog isOpen={true} onClose={onClose}>
      <ProductDetails data={item} />
    </ModalDialog>
  );
};
