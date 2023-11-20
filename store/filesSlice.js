import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

//indexedFiles == arquivos que estao disponiveis no blob storage - chave é o nome do arquivo no computador do usuario
//filesToUpload == fila de arquivos que ainda estao em proccesso de upload.
const initialState = {
  indexedFiles: {},
  filesToUpload: [],
  filesUploding: [],
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
    updateFilesUploding(state, action) {
      state.filesUploding = [...state.filesUploding, ...action.payload];
    },
    cleanFilesToUpload(state, _action) {
      state.filesToUpload = [];
    },
    removeFileFromUploadingList(state, action) {
      state.filesUploding = state.filesUploding.filter(
        (file) => file.id !== action.payload
      );
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

export const {
  updateIndexedFiles,
  updateFilesToUpload,
  updateFilesUploding,
  cleanFilesToUpload,
  removeFileFromUploadingList,
} = filesSlice.actions;
export const selectIndexedFiles = (state) => state.files.indexedFiles;
export const selectFilesToUpload = (state) => state.files.filesToUpload;
export const selectFilesUploading = (state) => state.files.filesUploding;
export default filesSlice.reducer;
