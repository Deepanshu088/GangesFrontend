import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    isLoading: false,
    bannerImgs: [],
    homeRoomImgs: [],
    mdProfileImg: "",
};

export const fetchSettings = createAsyncThunk("fetchSettings", async (apiService) => {
    try {
        const response = await apiService("/content");
        return response;
    } catch (e) {
        console.log(e);
    }
});


const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        resetSettings: () => initialState,
        setSettings: (state, action) => { },
    },
    extraReducers: builder => {
        builder.addCase(fetchSettings.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchSettings.fulfilled, (state, action) => {
            const { mdProfileImg, homeRoomImgs, bannerImgs} = action.payload.settings;
            state.mdProfileImg = mdProfileImg;
            state.homeRoomImgs = homeRoomImgs;
            state.bannerImgs = bannerImgs;
            state.error = null;
        });

        builder.addCase(fetchSettings.rejected, (state) => {
            state.isLoading = false;
            state.error = "Something went wrong";
        });
    }
});

export const { resetSettings, setSettings } = settingSlice.actions;

export default settingSlice.reducer;
