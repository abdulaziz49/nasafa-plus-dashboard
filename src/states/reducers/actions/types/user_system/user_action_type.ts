// For CRUD operations (assuming these will also be API calls eventually)
import type { User } from "../../../../../models/user_system/user_models";

// fetch user strings
export const FUR_STRING: string = "FETCH_USERS_REQUEST";
export const FUS_STRING: string = "FETCH_USERS_SUCCESS";
export const FUF_STRING: string = "FETCH_USERS_FAILURE";

// add user strings
export const AUR_STRING: string = "ADD_USERS_REQUEST";
export const AUS_STRING: string = "ADD_USERS_SUCCESS";
export const AUF_STRING: string = "ADD_USERS_FAILURE";

// edit user strings
export const EUR_STRING: string = "EDIT_USERS_REQUEST";
export const EUS_STRING: string = "EDIT_USERS_SUCCESS";
export const EUF_STRING: string = "EDIT_USERS_FAILURE";

// delete user strings
export const DUR_STRING: string = "DELETE_USERS_REQUEST";
export const DUS_STRING: string = "DELETE_USERS_SUCCESS";
export const DUF_STRING: string = "DELETE_USERS_FAILURE";

// search user strings
export const SUR_STRING: string = "SEARCH_USERS_REQUEST";
export const SUS_STRING: string = "SEARCH_USERS_SUCCESS";
export const SUF_STRING: string = "SEARCH_USERS_FAILURE";

export type UserActionTypes =
    // For fetching users
    | { type: FUR_STRING }
    | { type: FUS_STRING; payload: User[] }
    | { type: FUF_STRING; payload: string }

    // For adding user
    | { type: AUR_STRING }
    | { type: AUS_STRING; payload: User }
    | { type: AUF_STRING; payload: string }

    // For editing user
    | { type: EUR_STRING }
    | { type: EUS_STRING; payload: User }
    | { type: EUF_STRING; payload: string }

    // For deleting user
    | { type: DUR_STRING }
    | { type: DUS_STRING; payload: number }
    | { type: DUF_STRING; payload: string }

    // For searching users
    | { type: SUR_STRING }
    | { type: SUS_STRING; payload: string }
    | { type: SUF_STRING };
