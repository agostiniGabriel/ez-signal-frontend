import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

//indexedFiles == arquivos que estao disponiveis no blob storage - chave é o nome do arquivo no computador do usuario
//filesToUpload == fila de arquivos que ainda estao em proccesso de upload.
const initialState = {
  indexedFiles: {},
  filesToUpload: [],
};

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    updateIndexedFiles(state, action) {
      state.indexedFiles = { ...state.indexedFiles, ...action.payload };
    },
    updateFilesToUpload(state, action) {
      state.filesToUpload = [...state.filesToUpload, ...action.payload];
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.files,
      };
    },
  },
});

export const { updateIndexedFiles, updateFilesToUpload } = filesSlice.actions;
export const selectIndexedFiles = (state) => state.files.indexedFiles;
export const selectFilesToUpload = (state) => state.files.filesToUpload;
export default filesSlice.reducer;
