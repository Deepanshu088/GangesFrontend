import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    // rooms: [],
    groundFloor: [],
    firstFloor: [],
    secondFloor: [],
    thirdFloor: [],
};
const floorNames = ["groundFloor", "firstFloor", "secondFloor", "thirdFloor"];

export const fetchAllRooms = createAsyncThunk("fetchAllRooms", async (apiService) => {
    try {
        const response = await apiService("/room");
        console.log(response);
        // return response.rooms;

        const data = {
            groundFloor: [],
            firstFloor: [],
            secondFloor: [],
            thirdFloor: []
        };
        response.rooms.forEach(item => data?.[floorNames?.[+item?.floor]]?.push(item));
        return data;
    } catch (e) {
        console.log(e);
    }
});


const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        resetRooms: () => initialState,
        fetchRooms: (state, action) => { },
    },
    extraReducers: builder => {
        builder.addCase(fetchAllRooms.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchAllRooms.fulfilled, (state, action) => {

            state.groundFloor = action.payload.groundFloor;
            state.firstFloor = action.payload.firstFloor;
            state.secondFloor = action.payload.secondFloor;
            state.thirdFloor = action.payload.thirdFloor;
            // state.rooms = action.payload;
            state.error = null;
        });

        builder.addCase(fetchAllRooms.rejected, (state) => {
            state.isLoading = false;
            state.error = "Something went wrong";
        });
    }
});

export const { resetRooms, fetchRooms } = roomSlice.actions;

export default roomSlice.reducer;
