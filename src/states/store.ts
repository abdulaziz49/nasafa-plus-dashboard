// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/auth_slice.ts';
import userGroupsReducer from './users/user_group_slice.ts'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userGroups: userGroupsReducer
        // Add other reducers here if you have more slices
    },
});

// Define RootState and AppDispatch types for use with useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;