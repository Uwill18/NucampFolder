import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentUser:null
};

const userSlice  = createSlice({
  name:'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return({...state, currentUser: action.payload }) 
     }
  },
  
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
//Got the following error in the cosole: Cannot read properties of undefined
// (reading 'user')at selectCurrentUser
export  const selectCurrentUser =(state)=>{
    return state.user.currentUser;
}

