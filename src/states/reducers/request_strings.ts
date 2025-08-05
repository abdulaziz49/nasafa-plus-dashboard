export const RequestStrings = {
    // fetch data strings
    FCR_STRING: "FETCH_CACHE_REQUEST",
    FCS_STRING: "FETCH_CACHE_SUCCESS",
    FCF_STRING: "FETCH_CACHE_FAILURE",

    // fetch data strings
    FDR_STRING: "FETCH_DATA_REQUEST",
    FDS_STRING: "FETCH_DATA_SUCCESS",
    FDF_STRING: "FETCH_DATA_FAILURE",

    // add data strings
    ADR_STRING: "ADD_DATA_REQUEST",
    ADS_STRING: "ADD_DATA_SUCCESS",
    ADF_STRING: "ADD_DATA_FAILURE",

    // edit data strings
    EDR_STRING: "EDIT_DATA_REQUEST",
    EDS_STRING: "EDIT_DATA_SUCCESS",
    EDF_STRING: "EDIT_DATA_FAILURE",

    // delete data strings
    DDR_STRING: "DELETE_DATA_REQUEST",
    DDS_STRING: "DELETE_DATA_SUCCESS",
    DDF_STRING: "DELETE_DATA_FAILURE",

    // search data strings
    SDR_STRING: "SEARCH_DATA_REQUEST",
    SDS_STRING: "SEARCH_DATA_SUCCESS",
    SDF_STRING: "SEARCH_DATA_FAILURE",

    // search server data strings
    SSDR_STRING: "SEARCH_SERVER_DATA_REQUEST",
    SSDS_STRING: "SEARCH_SERVER_DATA_SUCCESS",
    SSDF_STRING: "SEARCH_SERVER_DATA_FAILURE",
} as const;

export type RequestStringLiteral =
    (typeof RequestStrings)[keyof typeof RequestStrings];
