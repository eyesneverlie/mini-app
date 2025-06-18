import { ModalType } from '../../data-access';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  type: ModalType | null;
  props: {[key: string]: unknown };
}

const INITIAL_STATE: IState = {
  type: null,
  props: {},
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: INITIAL_STATE,
  reducers: {
    open: (state = INITIAL_STATE, action: PayloadAction<{type: ModalType, props?: { [key: string]: unknown }}>) => {
      return ({
        ...state,
        type: action.payload.type,
        ...(action.payload?.props && { props: action.payload.props })
      });
    },
    reset: () => ({ ...INITIAL_STATE }),
  }
});

// for dispatch
export const storeModalsActions = modalsSlice.actions;

// for configureStore
const modalsReducer = modalsSlice.reducer;

export default modalsReducer;