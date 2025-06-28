import { ModalDialog } from '../../../ui';
import { ProfileEarnTon } from '../../../features';

interface IProfileEarnTonModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const ProfileEarnTonModal = ({
  onClose,
  onSuccess,
}: IProfileEarnTonModalProps) => {
  return (
    <ModalDialog
      title='Earn TON'
      description='From your friends volumes'
      isOpen={true}
      onConfirm={onSuccess}
      onClose={onClose}
    >
      <ProfileEarnTon />
    </ModalDialog>
  );
};
