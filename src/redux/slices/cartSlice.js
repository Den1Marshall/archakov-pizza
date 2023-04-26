import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      const payloadType = action.payload.activeType;
      const payloadSize = action.payload.activeSize;
      const payloadName = action.payload.name;
      const duplicateItemIndex = state.items.findIndex(
        (item) =>
          item.activeType === payloadType &&
          item.activeSize === payloadSize &&
          payloadName === item.name
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

      console.log(action.payload.pizzaCount);
    },

    clearCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },

    deleteItem(state, action) {
      const payloadName = action.payload.name;
      const payloadActiveSize = action.payload.activeSize;
      const payloadActiveType = action.payload.activeType;

      const itemToDelete = state.items.find(
        (item) =>
          item.name === payloadName &&
          item.activeSize === payloadActiveSize &&
          item.activeType === payloadActiveType
      );

      state.totalAmount -= itemToDelete.pizzaCount;
      state.totalPrice -= itemToDelete.price * itemToDelete.pizzaCount;

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

      foundItem.pizzaCount++;

      state.totalAmount++;
      state.totalPrice += payloadPrice;
    },

    decreaseAmount(state, action) {
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

      if (foundItem.pizzaCount > 1) {
        foundItem.pizzaCount--;
        state.totalAmount -= 1;
        state.totalPrice -= payloadPrice;
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
