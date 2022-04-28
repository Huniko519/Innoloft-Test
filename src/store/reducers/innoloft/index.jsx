import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: "",
  bussinessmodel: "",
  trl: "",
  description: "",
  logo: "",
  mainColor: "",
  hasUserSection: "",
};

// Slice
const innoloftSlice = createSlice({
  name: "innoloft",
  initialState,
  reducers: {
    setCategroies: (state, { payload }) => {
      state.categories = payload;
    },
    setBussinessmodel: (state, { payload }) => {
      state.bussinessmodel = payload;
    },
    setTrl: (state, { payload }) => {
      state.trl = payload;
    },
    setDescription: (state, { payload }) => {
      state.description = payload;
    },
    setLogo: (state, { payload }) => {
      state.logo = payload;
    },
    setMainColor: (state, { payload }) => {
      state.mainColor = payload;
    },
    setHasUserSection: (state, { payload }) => {
      state.hasUserSection = payload;
    },
  },
});

// Reducers
export default innoloftSlice.reducer;

// Selectors
export const testSelector = (state) => state.innoloft;

// Actions
export const {
  setCategroies,
  setBussinessmodel,
  setTrl,
  setDescription,
  setLogo,
  setMainColor,
  setHasUserSection,
} = innoloftSlice.actions;
