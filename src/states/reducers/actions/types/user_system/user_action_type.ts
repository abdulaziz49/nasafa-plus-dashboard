// For CRUD operations (assuming these will also be API calls eventually)
import type { User } from "../../../../../models/user_system/user_models";

export type UserActionTypes =
    // For fetching users
    | { type: "FETCH_USERS_REQUEST" }
    | { type: "FETCH_USERS_SUCCESS"; payload: User[] }
    | { type: "FETCH_USERS_FAILURE"; payload: string }

    // For adding user
    | { type: "ADD_USER_REQUEST" }
    | { type: "ADD_USER_SUCCESS"; payload: User }
    | { type: "ADD_USER_FAILURE"; payload: string }

    // For editing user
    | { type: "EDIT_USER_REQUEST" }
    | { type: "EDIT_USER_SUCCESS"; payload: User }
    | { type: "EDIT_USER_FAILURE"; payload: string }

    // For deleting user
    | { type: "DELETE_USER_REQUEST" }
    | { type: "DELETE_USER_SUCCESS"; payload: number }
    | { type: "DELETE_USER_FAILURE"; payload: string }

    // For searching users
    | { type: "SEARCH_USERS_REQUEST" }
    | { type: "SEARCH_USERS_SUCCESS"; payload: string }
    | { type: "SEARCH_USERS_FAILURE" };
