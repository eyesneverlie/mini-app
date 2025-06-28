import { ModalDialog } from '../../../ui';
import { ProfileSettings } from '../../../features';

interface IProfileSettingsModalProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export const ProfileSettingsModal = ({
  onClose,
  onSuccess,
}: IProfileSettingsModalProps) => {
  return (
    <ModalDialog
      title='Settings'
      isOpen={true}
      onConfirm={onSuccess}
      onClose={onClose}
    >
      <ProfileSettings />
    </ModalDialog>
  );
};
