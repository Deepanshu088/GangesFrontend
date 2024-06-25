import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import roomReducer from "./slices/roomSlice";
import settingReducer from "./slices/settingSlice";

// const userConfig = {
//     key: "user",
//     storage,
// };

// const roomConfig = {
//     key: "room",
//     storage,
// };

// const settingConfig = {
//     key: "setting",
//     storage,
// };


const rootReducer = combineReducers({
    // user: persistReducer(userConfig, userReducer),
    // room: persistReducer(roomConfig, roomReducer),
    // settings: persistReducer(settingConfig, settingReducer)
    user: userReducer,
    room: roomReducer,
    settings: settingReducer,
});

export default rootReducer;
