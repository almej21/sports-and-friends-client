import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  is_logged_in: false,
  user_id: "",
  user_name: "",
  email: "",
  balance: 0,
};

export const userInfoSlice = createSlice({
  //the name of the slice/state.
  name: "userData",

  //the initial state object.
  initialState: {
    value: initialStateValue,
  },

  //the reducers/actions functions.
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // writeToLocalStorage("is_logged_in", true);
    },

    logout: (state) => {
      state.value = initialStateValue;
      localStorage.setItem("userInfo", "");
      // writeToLocalStorage("is_logged_in", false);
    },
  },
});

export const { login, logout } = userInfoSlice.actions;

export default userInfoSlice.reducer;
