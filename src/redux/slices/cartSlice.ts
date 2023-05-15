import { createSlice } from '@reduxjs/toolkit';

export interface ICartItem {
  name: string;
  img: string;
  activeType: string;
  activeSize: number;
  price: number;
  pizzaCount: number;
}

interface IInitialState {
  items: ICartItem[];
  totalPrice: number;
  totalAmount: number;
}

const initialState: IInitialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

interface ActionPayload {
  payload: ICartItem;
  type: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action: ActionPayload) {
      const { activeType, activeSize, name } = action.payload;

      const duplicateItemIndex = state.items.findIndex(
        (item) =>
          item.activeType === activeType &&
          item.activeSize === activeSize &&
          name === item.name
      );

      if (duplicateItemIndex === -1) {
        state.items.push({ ...action.payload, pizzaCount: 1 });
        state.totalAmount += 1;
        state.totalPrice += action.payload.price;
      }
      if (duplicateItemIndex !== -1) {
        state.items[duplicateItemIndex].pizzaCount += 1;
        state.totalAmount += 1;
        state.totalPrice += action.payload.price;
      }
    },

    clearCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },

    deleteItem(state, action) {
      const { activeType, activeSize, name } = action.payload;

      const itemToDelete = state.items.find(
        (item) =>
          item.name === name &&
          item.activeSize === activeSize &&
          item.activeType === activeType
      );

      state.totalAmount -= itemToDelete!.pizzaCount;
      state.totalPrice -= itemToDelete!.price * itemToDelete!.pizzaCount;

      state.items = state.items.filter((item) => item !== itemToDelete);
    },

    increaseAmount(state, action) {
      const payloadName = action.payload.name;
      const payloadActiveSize = action.payload.activeSize;
      const payloadActiveType = action.payload.activeType;
      const payloadPrice = action.payload.price;

      const foundItem = state.items.find(
        (item) =>
          item.name === payloadName &&
          item.activeSize === payloadActiveSize &&
          item.activeType === payloadActiveType
      );

      foundItem!.pizzaCount++;

      state.totalAmount++;
      state.totalPrice += payloadPrice;
    },

    decreaseAmount(state, action) {
      const { name, activeSize, activeType, price } = action.payload;

      const foundItem = state.items.find(
        (item) =>
          item.name === name &&
          item.activeSize === activeSize &&
          item.activeType === activeType
      );

      if (foundItem!.pizzaCount > 1) {
        foundItem!.pizzaCount--;
        state.totalAmount -= 1;
        state.totalPrice -= price;
        return;
      } else {
        return;
      }
    },
  },
});

export const {
  addCartItem,
  clearCart,
  decreaseAmount,
  increaseAmount,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
