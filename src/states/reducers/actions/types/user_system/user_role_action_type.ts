// For CRUD operations (assuming these will also be API calls eventually)
import type {UserRole} from "../../../../../models/user_system/user_role_model";

// // fetch user role strings
// export const FURR_STRING: string = "FETCH_USER_ROLES_REQUEST";
// export const FURS_STRING: string = "FETCH_USER_ROLES_SUCCESS";
// export const FURF_STRING: string = "FETCH_USER_ROLES_FAILURE";

// // add user role strings
// export const AURR_STRING: string = "ADD_USER_ROLES_REQUEST";
// export const AURS_STRING: string = "ADD_USER_ROLES_SUCCESS";
// export const AURF_STRING: string = "ADD_USER_ROLES_FAILURE";

// // edit user role strings
// export const EURR_STRING: string = "EDIT_USER_ROLES_REQUEST";
// export const EURS_STRING: string = "EDIT_USER_ROLES_SUCCESS";
// export const EURF_STRING: string = "EDIT_USER_ROLES_FAILURE";

// // delete user role strings
// export const DURR_STRING: string = "DELETE_USER_ROLES_REQUEST";
// export const DURS_STRING: string = "DELETE_USER_ROLES_SUCCESS";
// export const DURF_STRING: string = "DELETE_USER_ROLES_FAILURE";

// // search user role strings
// export const SURR_STRING: string = "SEARCH_USER_ROLES_REQUEST";
// export const SURS_STRING: string = "SEARCH_USER_ROLES_SUCCESS";
// export const SURF_STRING: string = "SEARCH_USER_ROLES_FAILURE";

import { RequestStrings } from "../../request_strings";

export type UserRoleActionTypes =
// For fetching user roles
    | { name: typeof RequestStrings.FDR_STRING }
    | { name: typeof RequestStrings.FDS_STRING; payload: UserRole[] }
    | { name: typeof RequestStrings.FDF_STRING; payload: string }

    // For adding user role
    | { name: typeof RequestStrings.ADR_STRING }
    | { name: typeof RequestStrings.ADS_STRING; payload: UserRole }
    | { name: typeof RequestStrings.ADF_STRING; payload: string }

    // For editing user role
    | { name: typeof RequestStrings.EDR_STRING }
    | { name: typeof RequestStrings.EDS_STRING; payload: UserRole }
    | { name: typeof RequestStrings.EDF_STRING; payload: string }

    // For deleting user role
    | { name: typeof RequestStrings.DDR_STRING }
    | { name: typeof RequestStrings.DDS_STRING; payload: number }
    | { name: typeof RequestStrings.DDF_STRING; payload: string }

    // For searching user roles
    | { name: typeof RequestStrings.SDR_STRING }
    | { name: typeof RequestStrings.SDS_STRING; payload: string }
    | { name: typeof RequestStrings.SDF_STRING };
