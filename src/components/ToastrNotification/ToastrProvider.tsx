import { createContext, useContext, useState, useCallback } from 'react';
import styles from './ToastrProvider.module.scss';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastrContextType {
  notify: (message: string, type?: ToastType) => void;
}

interface IToastrProviderProps {
  children: React.ReactNode;
}

const ToastrContext = createContext<ToastrContextType | null>(null);

export const ToastrProvider = ({ children }: IToastrProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = useCallback((message: string, type: ToastType = 'info') => {
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast: Toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastrContext.Provider value={{ notify }}>
      {children}
      <div className={styles.container}>
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            className={`${styles.toastr} ${styles[`toastr-${type}`]}`}
          >
            {message}
          </div>
        ))}
      </div>
    </ToastrContext.Provider>
  );
};

export const useToastrContext = () => {
  const ctx = useContext(ToastrContext);

  if (!ctx) {
    throw new Error('useToastrContext must be used within ToastrProvider');
  }

  return ctx;
};
