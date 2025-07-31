// For CRUD operations (assuming these will also be API calls eventually)
import type { TruckType } from "../../../../../models/truck/truck_type_models";

// import * as strings from "../../strings";

// // fetch truck type strings
// export const FTTR_STRING: string = "FETCH_TRUCK_TYPES_REQUEST";
// export const FTTS_STRING: string = "FETCH_TRUCK_TYPES_SUCCESS";
// export const FTTF_STRING: string = "FETCH_TRUCK_TYPES_FAILURE";

// // add truck type strings
// export const ATTR_STRING: string = "ADD_TRUCK_TYPE_REQUEST";
// export const ATTS_STRING: string = "ADD_TRUCK_TYPE_SUCCESS";
// export const ATTF_STRING: string = "ADD_TRUCK_TYPE_FAILURE";

// // edit truck type strings
// export const ETTR_STRING: string = "EDIT_TRUCK_TYPE_REQUEST";
// export const ETTS_STRING: string = "EDIT_TRUCK_TYPE_SUCCESS";
// export const ETTF_STRING: string = "EDIT_TRUCK_TYPE_FAILURE";

// // delete truck type strings
// export const DTTR_STRING: string = "DELETE_TRUCK_TYPE_REQUEST";
// export const DTTS_STRING: string = "DELETE_TRUCK_TYPE_SUCCESS";
// export const DTTF_STRING: string = "DELETE_TRUCK_TYPE_FAILURE";

// // search truck type strings
// export const STTR_STRING: string = "SEARCH_TRUCK_TYPES_REQUEST";
// export const STTS_STRING: string = "SEARCH_TRUCK_TYPES_SUCCESS";
// export const STTF_STRING: string = "SEARCH_TRUCK_TYPES_FAILURE";
import { RequestStrings } from "../../../request_strings";

export type TruckTypeActionTypes =
    // For fetching truck types
    | { name: typeof RequestStrings.FDR_STRING }
    | { name: typeof RequestStrings.FDS_STRING; payload: TruckType[] }
    | { name: typeof RequestStrings.FDF_STRING; payload: string }

    // For adding truck type
    | { name: typeof RequestStrings.ADR_STRING }
    | { name: typeof RequestStrings.ADS_STRING; payload: TruckType }
    | { name: typeof RequestStrings.ADF_STRING; payload: string }

    // For editing truck type
    | { name: typeof RequestStrings.EDR_STRING }
    | { name: typeof RequestStrings.EDS_STRING; payload: TruckType }
    | { name: typeof RequestStrings.EDF_STRING; payload: string }

    // For deleting truck type
    | { name: typeof RequestStrings.DDR_STRING }
    | { name: typeof RequestStrings.DDS_STRING; payload: number }
    | { name: typeof RequestStrings.DDF_STRING; payload: string }

    // For searching truck types
    | { name: typeof RequestStrings.SDR_STRING }
    | { name: typeof RequestStrings.SDS_STRING; payload: string }
    | { name: typeof RequestStrings.SDF_STRING };
