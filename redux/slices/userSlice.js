import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    authToken: null,
    idToken: null,
    userDetails: null,
    refreshToken: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.authToken = action.payload.authToken;
            state.userDetails = action.payload.userDetails;
            state.idToken = action.payload.idToken;
            state.refreshToken = action.payload.refreshToken;
        },
        logoutUser: () => initialState,
        updateTokens: (state, action) => {
            state.idToken = action.payload.id_Token;
            state.refreshToken = action.payload.refresh_Token;
        },
    },
});

export const { loginUser, logoutUser, updateTokens } = userSlice.actions;

export default userSlice.reducer;
