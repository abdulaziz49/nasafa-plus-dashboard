// For CRUD operations (assuming these will also be API calls eventually)
import type {User} from "../../../../../models/user_system/user_models";

// // fetch user strings
// export const FUR_STRING: string = "FETCH_USERS_REQUEST";
// export const FUS_STRING: string = "FETCH_USERS_SUCCESS";
// export const FUF_STRING: string = "FETCH_USERS_FAILURE";

// // add user strings
// export const AUR_STRING: string = "ADD_USERS_REQUEST";
// export const AUS_STRING: string = "ADD_USERS_SUCCESS";
// export const AUF_STRING: string = "ADD_USERS_FAILURE";

// // edit user strings
// export const EUR_STRING: string = "EDIT_USERS_REQUEST";
// export const EUS_STRING: string = "EDIT_USERS_SUCCESS";
// export const EUF_STRING: string = "EDIT_USERS_FAILURE";

// // delete user strings
// export const DUR_STRING: string = "DELETE_USERS_REQUEST";
// export const DUS_STRING: string = "DELETE_USERS_SUCCESS";
// export const DUF_STRING: string = "DELETE_USERS_FAILURE";

// // search user strings
// export const SUR_STRING: string = "SEARCH_USERS_REQUEST";
// export const SUS_STRING: string = "SEARCH_USERS_SUCCESS";
// export const SUF_STRING: string = "SEARCH_USERS_FAILURE";
import { RequestStrings } from "../../../request_strings";

export type UserActionTypes =
// For fetching users
    | { name: typeof RequestStrings.FDR_STRING }
    | { name: typeof RequestStrings.FDS_STRING; payload: User[] }
    | { name: typeof RequestStrings.FDF_STRING; payload: string }

    // For adding user
    | { name: typeof RequestStrings.ADR_STRING }
    | { name: typeof RequestStrings.ADS_STRING; payload: User }
    | { name: typeof RequestStrings.ADF_STRING; payload: string }

    // For editing user
    | { name: typeof RequestStrings.EDR_STRING }
    | { name: typeof RequestStrings.EDS_STRING; payload: User }
    | { name: typeof RequestStrings.EDF_STRING; payload: string }

    // For deleting user
    | { name: typeof RequestStrings.DDR_STRING }
    | { name: typeof RequestStrings.DDS_STRING; payload: number }
    | { name: typeof RequestStrings.DDF_STRING; payload: string }

    // For searching users
    | { name: typeof RequestStrings.SDR_STRING }
    | { name: typeof RequestStrings.SDS_STRING; payload: string }
    | { name: typeof RequestStrings.SDF_STRING };
