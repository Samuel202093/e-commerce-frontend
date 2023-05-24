import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    result: localStorage.getItem('admin'),
    email: '',
    authenticated: false
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers:{
        loadAdmin(state, action){
            const response = state.result
            if (response) {
                return {
                   ...state,
                   email: response.email,
                   authenticated: true
                } 
            }
           
        },
        logoutAdmin(){
        localStorage.removeItem("admin");
      return {
        ...state,
        result: "",
        email: "",
        authenticated: false,
      };
        }
    }
})

export const {loadAdmin, logoutAdmin} = adminSlice.actions

export default adminSlice.reducer;