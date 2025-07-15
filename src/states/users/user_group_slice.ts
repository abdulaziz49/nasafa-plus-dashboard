// src/features/user_groups/userGroupSlice.ts
import {createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
import AppAxios from "../../utils/app_axios.ts";
import type {UserGroup, UserGroupState} from "../../models/users/user_role_model.ts"; // Assuming this is your configured Axios instance


// --- Initial State ---
const initialState: UserGroupState = {
    search: null,
    groups: null,
    isSearching: false,
    isLoading: false,
    error: null,
};

// --- Async Thunks ---

export const addUserGroup = createAsyncThunk<UserGroup, Omit<UserGroup, 'id' | 'user_creator'>>( // Omit ID and user_creator as they're set by backend
    'user_group/addUserGroup',
    async (newGroupData, {rejectWithValue}) => {
        try {
            // Assuming your API endpoint for adding a user group
            const response = await AppAxios.post<UserGroup>('/api/user-groups', newGroupData);
            return response.data;
        } catch (error: any) {
            console.error("Add user group failed:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data?.message || 'Failed to add user group');
        }
    }
);

export const editUserGroup = createAsyncThunk<UserGroup, UserGroup>( // Returns updated UserGroup, accepts full UserGroup
    'user_group/editUserGroup',
    async (updatedGroup, {rejectWithValue}) => {
        try {
            // Assuming your API endpoint for editing a user group is PUT/PATCH to /api/user-groups/{id}
            const response = await AppAxios.put<UserGroup>(`/api/user-groups/${updatedGroup.id}`, updatedGroup);
            return response.data;
        } catch (error: any) {
            console.error("Edit user group failed:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data?.message || 'Failed to edit user group');
        }
    }
);

export const deleteUserGroup = createAsyncThunk<number, number>( // Returns the ID of the deleted group, accepts ID
    'user_group/deleteUserGroup',
    async (groupId, {rejectWithValue}) => {
        try {
            // Assuming your API endpoint for deleting a user group is DELETE to /api/user-groups/{id}
            await AppAxios.delete(`/api/user-groups/${groupId}`);
            return groupId; // Return the ID to easily update state
        } catch (error: any) {
            console.error("Delete user group failed:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data?.message || 'Failed to delete user group');
        }
    }
);

export const fetchAllUserGroups = createAsyncThunk<UserGroup[], void>( // Returns array of UserGroup, accepts nothing
    'user_group/fetchAllUserGroups',
    async (_, {rejectWithValue}) => {
        try {
            // Assuming your API endpoint for fetching all user groups
            const response = await AppAxios.get<UserGroup[]>('user-groups');
            return response.data;
        } catch (error: any) {
            console.error("Fetch all user groups failed:", error.response?.data || error.message);
            if (error.response?.status === 401) {
                // This indicates an auth issue, might need global handling in axios interceptor or auth slice
                return rejectWithValue('Unauthorized or session expired. Please log in again.');
            }
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch user groups');
        }
    }
);

export const searchUserGroups = createAsyncThunk<UserGroup[], string>( // Returns array of UserGroup, accepts search query string
    'user_group/searchUserGroups',
    async (query, {rejectWithValue}) => {
        try {
            // Assuming your API endpoint for searching user groups is /api/user-groups?search=query
            const response = await AppAxios.get<UserGroup[]>(`/api/user-groups?search=${query}`);
            return response.data;
        } catch (error: any) {
            console.error("Search user groups failed:", error.response?.data || error.message);
            return rejectWithValue(error.response?.data?.message || 'Failed to search user groups');
        }
    }
);


// --- User Group Slice ---
const userGroupSlice = createSlice({
    name: 'UserGroups',
    initialState,
    reducers: {
        // Resets the state to its initial defined values
        clearGroups: () => {
            return initialState;
        },
        // Action to clear search results specifically
        clearSearchResults: (state) => {
            state.search = null;
            state.isSearching = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // --- Add User Group ---
            .addCase(addUserGroup.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addUserGroup.fulfilled, (state, action: PayloadAction<UserGroup>) => {
                state.isLoading = false;
                state.error = null;
                // Add the new group to the 'groups' list if it exists
                if (state.groups) {
                    state.groups.push(action.payload);
                } else {
                    state.groups = [action.payload];
                }
                state.search = null; // Clear search results after adding
                state.isSearching = false;
            })
            .addCase(addUserGroup.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to add user group.';
            })

            // --- Edit User Group ---
            .addCase(editUserGroup.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editUserGroup.fulfilled, (state, action: PayloadAction<UserGroup>) => {
                state.isLoading = false;
                state.error = null;
                // Update the specific group in the 'groups' list
                if (state.groups) {
                    const index = state.groups.findIndex(group => group.id === action.payload.id);
                    if (index !== -1) {
                        state.groups[index] = action.payload;
                    }
                }
                // Also update in search results if present
                if (state.search) {
                    const index = state.search.findIndex(group => group.id === action.payload.id);
                    if (index !== -1) {
                        state.search[index] = action.payload;
                    }
                }
            })
            .addCase(editUserGroup.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to edit user group.';
            })

            // --- Delete User Group ---
            .addCase(deleteUserGroup.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteUserGroup.fulfilled, (state, action: PayloadAction<number>) => {
                state.isLoading = false;
                state.error = null;
                // Remove the deleted group from the 'groups' list
                if (state.groups) {
                    state.groups = state.groups.filter(group => group.id !== action.payload);
                }
                // Also remove from search results if present
                if (state.search) {
                    state.search = state.search.filter(group => group.id !== action.payload);
                }
            })
            .addCase(deleteUserGroup.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to delete user group.';
            })

            // --- Fetch All User Groups ---
            .addCase(fetchAllUserGroups.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.isSearching = false; // Reset search state
            })
            .addCase(fetchAllUserGroups.fulfilled, (state, action: PayloadAction<UserGroup[]>) => {
                state.isLoading = false;
                state.error = null;
                state.groups = action.payload; // Set the fetched groups
                state.search = null; // Clear search results as we fetched all
                state.isSearching = false;
            })
            .addCase(fetchAllUserGroups.rejected, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.groups = null; // Clear groups on error
                state.error = action.payload || 'Failed to fetch all user groups.';
                state.isSearching = false;
            })

            // --- Search User Groups ---
            .addCase(searchUserGroups.pending, (state) => {
                state.isSearching = true; // Indicate that a search is in progress
                state.error = null;
                state.search = null; // Clear previous search results while searching
            })
            .addCase(searchUserGroups.fulfilled, (state, action: PayloadAction<UserGroup[]>) => {
                state.isSearching = false;
                state.error = null;
                state.search = action.payload; // Set the search results
            })
            .addCase(searchUserGroups.rejected, (state, action: PayloadAction<string>) => {
                state.isSearching = false;
                state.search = null; // Clear search results on error
                state.error = action.payload || 'Failed to search user groups.';
            });
    },
});

export const {clearGroups, clearSearchResults} = userGroupSlice.actions;
export default userGroupSlice.reducer;