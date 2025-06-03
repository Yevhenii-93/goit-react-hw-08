import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name.toLowerCase();

// export const selectNameFilter = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterValue) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterValue)
//     );
//   }
// );

export default filtersSlice.reducer;
