import { useDispatch, useSelector } from 'react-redux';
import { ModalsFactory } from './ModalsFactory';
import { RootState } from '../../store';
import { storeModalsActions } from '../../store/slices/modals';

export const ModalsContainer = () => {
  const { type, props } = useSelector((state: RootState) => state.modals);
  const dispatch = useDispatch();

  const handleModalClose = (): void => {
    dispatch(storeModalsActions.reset());
  };

  return type ? (
    <ModalsFactory type={type} onClose={handleModalClose} {...props} />
  ) : null;
};
