import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { setUser } = userSlice.actions;
export const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
