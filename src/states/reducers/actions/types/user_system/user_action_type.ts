// For CRUD operations (assuming these will also be API calls eventually)
import type {User} from "../../../../../models/user_system/user_models";

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
    | { name: FUR_STRING }
    | { name: FUS_STRING; payload: User[] }
    | { name: FUF_STRING; payload: string }

    // For adding user
    | { name: AUR_STRING }
    | { name: AUS_STRING; payload: User }
    | { name: AUF_STRING; payload: string }

    // For editing user
    | { name: EUR_STRING }
    | { name: EUS_STRING; payload: User }
    | { name: EUF_STRING; payload: string }

    // For deleting user
    | { name: DUR_STRING }
    | { name: DUS_STRING; payload: number }
    | { name: DUF_STRING; payload: string }

    // For searching users
    | { name: SUR_STRING }
    | { name: SUS_STRING; payload: string }
    | { name: SUF_STRING };
