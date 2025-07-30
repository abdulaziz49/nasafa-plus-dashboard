// // fetch data strings
// export const FDR_STRING: string = "FETCH_DATA_REQUEST";
// export const FDS_STRING: string = "FETCH_DATA_SUCCESS";
// export const FDF_STRING: string = "FETCH_DATA_FAILURE";

// // add data strings
// export const ADR_STRING: string = "ADD_DATA_REQUEST";
// export const ADS_STRING: string = "ADD_DATA_SUCCESS";
// export const ADF_STRING: string = "ADD_DATA_FAILURE";

// // edit data strings
// export const EDR_STRING: string = "EDIT_DATA_REQUEST";
// export const EDS_STRING: string = "EDIT_DATA_SUCCESS";
// export const EDF_STRING: string = "EDIT_DATA_FAILURE";

// // delete data strings
// export const DDR_STRING: string = "DELETE_DATA_REQUEST";
// export const DDS_STRING: string = "DELETE_DATA_SUCCESS";
// export const DDF_STRING: string = "DELETE_DATA_FAILURE";

// // search data strings
// export const SDR_STRING: string = "SEARCH_DATA_REQUEST";
// export const SDS_STRING: string = "SEARCH_DATA_SUCCESS";
// export const SDF_STRING: string = "SEARCH_DATA_FAILURE";

export const RequestStrings = {
    // fetch data strings
 FDR_STRING : "FETCH_DATA_REQUEST",
 FDS_STRING : "FETCH_DATA_SUCCESS",
 FDF_STRING : "FETCH_DATA_FAILURE",

// add data strings
 ADR_STRING : "ADD_DATA_REQUEST",
 ADS_STRING : "ADD_DATA_SUCCESS",
 ADF_STRING : "ADD_DATA_FAILURE",

// edit data strings
 EDR_STRING : "EDIT_DATA_REQUEST",
 EDS_STRING : "EDIT_DATA_SUCCESS",
 EDF_STRING : "EDIT_DATA_FAILURE",

// delete data strings
 DDR_STRING : "DELETE_DATA_REQUEST",
 DDS_STRING : "DELETE_DATA_SUCCESS",
 DDF_STRING : "DELETE_DATA_FAILURE",

// search data strings
 SDR_STRING : "SEARCH_DATA_REQUEST",
 SDS_STRING : "SEARCH_DATA_SUCCESS",
 SDF_STRING : "SEARCH_DATA_FAILURE",
} as const

export type RequestStringLiteral = typeof RequestStrings[keyof typeof RequestStrings];