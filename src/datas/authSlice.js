import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  result: localStorage.getItem("user"),
  email: '',
  userLoaded: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const response = state.result;
      if (response) {
        return {
          ...state,
          email: response.email,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("user");
      return {
        ...state,
        result: "",
        email: "",
        userLoaded: false,
      };
    },
   
  },
   
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
