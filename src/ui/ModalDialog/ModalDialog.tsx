import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../ui';
import styles from './ModalDialog.module.scss';

type ModalDialogProps = {
  isOpen: boolean;
  onConfirm?: () => void;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export const ModalDialog: React.FC<ModalDialogProps> = ({ isOpen, onClose, onConfirm, title = '', description = '', children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  // Add a small delay to allow CSS transition on mount
  useEffect(() => {
    let animationTimeoutId: ReturnType<typeof setTimeout>;

    if (isOpen) {
      animationTimeoutId = setTimeout(() => setIsVisible(true), 1);
    } else {
      setIsVisible(false);
    }

    return () => {
      clearTimeout(animationTimeoutId);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${styles.overlay} ${isVisible ? styles.show : ''}`} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.closeButton} onClick={onClose}>
          &times;
        </Button>
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.body}>{children}</div>
        <div className={styles.controls}>
          <Button onClick={onConfirm}>Confirm</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}