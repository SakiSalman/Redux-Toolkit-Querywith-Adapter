import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        login : false,
        token  : null,
        
    },
    reducers : {}
})


export const {} = authSlice.actions
export default authSlice.reducer