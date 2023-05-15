import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  categoryID: number;
  sort: {
    name: string;
    value: string;
  };
}

const initialState: IInitialState = {
  categoryID: 0,

  sort: {
    name: 'Популярности (DESC)',
    value: 'rating&order=desc',
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },

    setSort(state, action) {
      switch (action.payload) {
        case 0:
          state.sort = {
            name: 'Популярности (DESC)',
            value: 'rating&order=desc',
          };
          break;
        case 1:
          state.sort = {
            name: 'Популярности (ASC)',
            value: 'rating&order=asc',
          };
          break;
        case 2:
          state.sort = {
            name: 'Цене (DESC)',
            value: 'price&order=desc',
          };
          break;
        case 3:
          state.sort = {
            name: 'Цене (ASC)',
            value: 'price&order=asc',
          };
          break;
        case 4:
          state.sort = {
            name: 'Алфавиту (DESC)',
            value: 'title&order=desc',
          };
          break;
        case 5:
          state.sort = {
            name: 'Алфавиту (ASC)',
            value: 'title&order=asc',
          };
          break;

        default:
          state.sort = {
            name: 'Популярности (DESC)',
            value: 'rating&order=desc',
          };
          break;
      }
    },
  },
});

export const { setCategoryID, setSort } = filterSlice.actions;

export default filterSlice.reducer;
