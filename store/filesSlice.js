import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Files is not a list, since we are indexing it by name
const initialState = {
  availableFiles: {
    teste: { id: "dasdadasd", fileName: "teste", extension: ".wav" },
  },
};

// Actual Slice
export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    // Action to set the authentication status
    updateFiles(state, action) {
      state.availableFiles = { ...state.availableFiles, ...action.payload };
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.files,
      };
    },
  },
});

export const { updateFiles } = filesSlice.actions;

export const selectFilesState = (state) => state.files.availableFiles;

export default filesSlice.reducer;
