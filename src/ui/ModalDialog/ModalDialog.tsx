import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { GlassyButton, Button } from '../../ui';
import { CloseIcon } from '../../components/icons';
import styles from './ModalDialog.module.scss';

type ModalDialogProps = {
  isOpen: boolean;
  onConfirm?: () => void;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  showActionButtons?: boolean;
};

export const ModalDialog: React.FC<ModalDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = '',
  description = '',
  children,
  showActionButtons = false,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Add a small delay to allow CSS transition on mount
  useEffect(() => {
    let animationTimeoutId: ReturnType<typeof setTimeout>;

    if (isOpen) {
      document.body.classList.add('modal-open');
      animationTimeoutId = setTimeout(() => setIsVisible(true), 1);
    } else {
      document.body.classList.remove('modal-open');
      setIsVisible(false);
    }

    return () => {
      document.body.classList.remove('modal-open');
      clearTimeout(animationTimeoutId);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`${styles.overlay} ${isVisible ? styles.show : ''}`}
      onClick={onClose}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <GlassyButton className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </GlassyButton>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.body}>{children}</div>
        {showActionButtons && (
          <div className={styles.controls}>
            <GlassyButton className={styles.cancelButton} onClick={onClose}>
              Cancel
            </GlassyButton>
            {onConfirm && (
              <Button className={styles.confirmButton} onClick={onConfirm}>
                Confirm
              </Button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
