import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../data-access';

interface IState {
  list: IProduct[];
  total: number;
}

const INITIAL_STATE: IState = {
  list: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state = INITIAL_STATE, action: PayloadAction<{ item: IProduct; }>) => {
      const { item } = action.payload;
      const newList = [...state.list, item];
      return ({
        ...state,
        list: newList,
        total: newList.reduce((sum, item) => sum + item.price, 0),
      });
    },
    removeItem: (state = INITIAL_STATE, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const processedList = state.list.filter((item: IProduct) => item.id !== id);
      return ({
        ...state,
        list: processedList,
        total: processedList.reduce((sum, item) => sum + item.price, 0),
      });
    },
    selectAll: (state = INITIAL_STATE) => {
      return ({
        ...state,
        list: [...state.list].map(item => ({ ...item, isSelected: true }))
      });
    },
    unselectAll: (state = INITIAL_STATE) => {
      return ({
        ...state,
        list: [...state.list].map(item => ({ ...item, isSelected: false }))
      });
    },
    toggleItem: (state = INITIAL_STATE, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      return ({
        ...state,
        list: state.list.map((item) => item.id === id ? { ...item, isSelected: !item.isSelected } : item)
      });
    },
    reset: () => ({ ...INITIAL_STATE }),
  }
});

// for dispatch
export const storeCartActions = cartSlice.actions;

// for configureStore
const cartReducer = cartSlice.reducer;

export default cartReducer;