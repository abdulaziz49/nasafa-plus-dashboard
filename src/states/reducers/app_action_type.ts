// For CRUD operations (assuming these will also be API calls eventually)
// import type { TruckType } from "../../../../../models/truck/truck_type_models";

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
import { RequestStrings, type RequestStringLiteral } from "./request_strings";

type AppActionPayload<T>     = {
    [RequestStrings.FCR_STRING]: undefined;
    [RequestStrings.FCS_STRING]: object[];
    [RequestStrings.FCF_STRING]: string | null;

    [RequestStrings.FDR_STRING]: undefined;
    [RequestStrings.FDS_STRING]: T[];
    [RequestStrings.FDF_STRING]: string | null;

    [RequestStrings.ADR_STRING]: undefined;
    [RequestStrings.ADS_STRING]: T;
    [RequestStrings.ADF_STRING]: string | null;

    [RequestStrings.EDR_STRING]: undefined;
    [RequestStrings.EDS_STRING]: T; // The updated item
    [RequestStrings.EDF_STRING]: string | null;

    [RequestStrings.DDR_STRING]: undefined;
    [RequestStrings.DDS_STRING]: number; // The ID of the deleted item (number or string)
    [RequestStrings.DDF_STRING]: string | null;

    [RequestStrings.SDR_STRING]: undefined;
    [RequestStrings.SDS_STRING]: string; // The search term
    [RequestStrings.SDF_STRING]: string | null;

    [RequestStrings.SSDR_STRING]: undefined;
    [RequestStrings.SSDS_STRING]: T[]; // The search term
    [RequestStrings.SSDF_STRING]: string | null;
};

// Generic AppActionType
// The fix is here:
// Use RequestStringLiteral as the type to iterate over for K
export type AppActionType<T> = {
    [K in RequestStringLiteral]: {
        // K will now correctly be a union of string literal types
        name: K;
        payload: AppActionPayload<T>[K];
    };
}[RequestStringLiteral]; // Index with RequestStringLiteral to get the union of action objects
