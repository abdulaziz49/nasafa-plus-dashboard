// For CRUD operations (assuming these will also be API calls eventually)
import type { TruckType } from "../../../../../models/truck/truck_type_models";

// fetch truck type strings
export const FTTR_STRING: string = "FETCH_TRUCK_TYPES_REQUEST";
export const FTTS_STRING: string = "FETCH_TRUCK_TYPES_SUCCESS";
export const FTTF_STRING: string = "FETCH_TRUCK_TYPES_FAILURE";

// add truck type strings
export const ATTR_STRING: string = "ADD_TRUCK_TYPE_REQUEST";
export const ATTS_STRING: string = "ADD_TRUCK_TYPE_SUCCESS";
export const ATTF_STRING: string = "ADD_TRUCK_TYPE_FAILURE";

// edit truck type strings
export const ETTR_STRING: string = "EDIT_TRUCK_TYPE_REQUEST";
export const ETTS_STRING: string = "EDIT_TRUCK_TYPE_SUCCESS";
export const ETTF_STRING: string = "EDIT_TRUCK_TYPE_FAILURE";

// delete truck type strings
export const DTTR_STRING: string = "DELETE_TRUCK_TYPE_REQUEST";
export const DTTS_STRING: string = "DELETE_TRUCK_TYPE_SUCCESS";
export const DTTF_STRING: string = "DELETE_TRUCK_TYPE_FAILURE";

// search truck type strings
export const STTR_STRING: string = "SEARCH_TRUCK_TYPES_REQUEST";
export const STTS_STRING: string = "SEARCH_TRUCK_TYPES_SUCCESS";
export const STTF_STRING: string = "SEARCH_TRUCK_TYPES_FAILURE";

export type TruckTypeActionTypes =
// For fetching truck types
    | { name: FTTR_STRING }
    | { name: FTTS_STRING; payload: TruckType[] }
    | { name: FTTF_STRING; payload: string }

    // For adding truck type
    | { name: ATTR_STRING }
    | { name: ATTS_STRING; payload: TruckType }
    | { name: ATTF_STRING; payload: string }

    // For editing truck type
    | { name: ETTR_STRING }
    | { name: ETTS_STRING; payload: TruckType }
    | { name: ETTF_STRING; payload: string }

    // For deleting truck type
    | { name: DTTR_STRING }
    | { name: DTTS_STRING; payload: number }
    | { name: DTTF_STRING; payload: string }

    // For searching truck types
    | { name: STTR_STRING }
    | { name: STTS_STRING; payload: string }
    | { name: STTF_STRING };
