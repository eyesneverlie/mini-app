import { useToastrContext } from '../components/ToastrNotification';

export const useToastr = () => {
  const { notify } = useToastrContext();
  return notify;
};