// For CRUD operations (assuming these will also be API calls eventually)
import type {UserRole} from "../../../../../models/user_system/user_role_model";

// fetch user role strings
export const FURR_STRING: string = "FETCH_USER_ROLES_REQUEST";
export const FURS_STRING: string = "FETCH_USER_ROLES_SUCCESS";
export const FURF_STRING: string = "FETCH_USER_ROLES_FAILURE";

// add user role strings
export const AURR_STRING: string = "ADD_USER_ROLES_REQUEST";
export const AURS_STRING: string = "ADD_USER_ROLES_SUCCESS";
export const AURF_STRING: string = "ADD_USER_ROLES_FAILURE";

// edit user role strings
export const EURR_STRING: string = "EDIT_USER_ROLES_REQUEST";
export const EURS_STRING: string = "EDIT_USER_ROLES_SUCCESS";
export const EURF_STRING: string = "EDIT_USER_ROLES_FAILURE";

// delete user role strings
export const DURR_STRING: string = "DELETE_USER_ROLES_REQUEST";
export const DURS_STRING: string = "DELETE_USER_ROLES_SUCCESS";
export const DURF_STRING: string = "DELETE_USER_ROLES_FAILURE";

// search user role strings
export const SURR_STRING: string = "SEARCH_USER_ROLES_REQUEST";
export const SURS_STRING: string = "SEARCH_USER_ROLES_SUCCESS";
export const SURF_STRING: string = "SEARCH_USER_ROLES_FAILURE";

export type UserRoleActionTypes =
// For fetching user roles
    | { name: FURR_STRING }
    | { name: FURS_STRING; payload: UserRole[] }
    | { name: FURF_STRING; payload: string }

    // For adding user role
    | { name: AURR_STRING }
    | { name: AURS_STRING; payload: UserRole }
    | { name: AURF_STRING; payload: string }

    // For editing user role
    | { name: EURR_STRING }
    | { name: EURS_STRING; payload: UserRole }
    | { name: EURF_STRING; payload: string }

    // For deleting user role
    | { name: DURR_STRING }
    | { name: DURS_STRING; payload: number }
    | { name: DURF_STRING; payload: string }

    // For searching user roles
    | { name: SURR_STRING }
    | { name: SURS_STRING; payload: string }
    | { name: SURF_STRING };
