// states/reducers/actions/user_truck type_service.ts (or src/actions/user_truck type_actions.ts)
import AppAxios, {
    getAuthAxiosConfig,
} from "../../../../../utils/app_axios.ts";
import type { TruckType } from "../../../../../models/truck/truck_type_models.ts";
import type { Dispatch } from "react";
import {
    ATTF_STRING,
    ATTR_STRING,
    ATTS_STRING,
    DTTF_STRING,
    DTTR_STRING,
    DTTS_STRING,
    ETTF_STRING,
    ETTR_STRING,
    ETTS_STRING,
    FTTF_STRING,
    FTTR_STRING,
    FTTS_STRING,
    STTF_STRING,
    STTR_STRING,
    STTS_STRING,
    type TruckTypeActionTypes,
} from "../../types/truck/truck_type_action_type.ts";
import axios from "axios";

// --- Async Action Creators ---
export const fetchTruckTypes = async (
    dispatch: Dispatch<TruckTypeActionTypes>,
    token: string
): Promise<void> => {
    // if (fetching)
    dispatch({ name: FTTR_STRING });
    try {
        const response = await AppAxios.get(
            "types/class/trucks",
            getAuthAxiosConfig(token)
        );
        dispatch({
            name: FTTS_STRING,
            payload: response.data.data,
        });
        // console.log(`truck types: ${response.data}`);
        console.log(response.data.data);
    } catch (error: unknown) {
        // Axios errors have a 'response' property
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to fetch truck types";
            dispatch({ name: FTTF_STRING, payload: errorMessage });
        }
    }
};

export const addTrucKType = async (
    dispatch: Dispatch<TruckTypeActionTypes>,
    token: string,
    newTruckType: Omit<
        TruckType,
        "id" | "created_at" | "updated_at" | "description"
    >
) => {
    // You might dispatch a 'ADD_truck type_REQUEST' here too, for a loading state on the form
    dispatch({ name: ATTR_STRING });
    try {
        newTruckType.code = "trucks";
        newTruckType['class'] = "trucks1";
        const response = await AppAxios.post(
            "types",
            newTruckType,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: ATTS_STRING, payload: response.data.data }); // Backend should return the created truck type with ID
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response!.statusText ||
                error.message ||
                "Failed to add truck type";
            dispatch({ name: ATTF_STRING, payload: errorMessage });
            console.error("Add truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editTrucKType = async (
    dispatch: Dispatch<TruckTypeActionTypes>,
    token: string,
    updatedTruckType: TruckType
) => {
    dispatch({ name: ETTR_STRING });
    try {
        // Assuming API endpoint is /api/truck types/{id} for PUT/PATCH
        const response = await AppAxios.put(
            `types/${updatedTruckType.id}`,
            updatedTruckType,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: ETTS_STRING, payload: response.data });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to edit truck type";
            dispatch({ name: ETTF_STRING, payload: errorMessage });
            console.error("Edit truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const deleteTrucKType = async (
    dispatch: Dispatch<TruckTypeActionTypes>,
    token: string,
    id: number
) => {
    dispatch({ name: DTTR_STRING });
    try {
        await AppAxios.delete(`types/${id}`, getAuthAxiosConfig(token));
        dispatch({ name: DTTS_STRING, payload: id });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to delete truck type";
            dispatch({ name: DTTF_STRING, payload: errorMessage });
            console.error("Delete truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const searchTrucKType = (
    dispatch: Dispatch<TruckTypeActionTypes>,
    searchTerm: string,
    stillSearch: boolean
) => {
    if (!stillSearch) dispatch({ name: STTR_STRING });
    // try {
    // console.log(searchTerm)
    // let filteredUSER_truck type: TrucKType[]
    if (searchTerm.length > 0) {
        // filteredUSER_truck type = USER_truck type.filter((row) => row.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        dispatch({ name: STTS_STRING, payload: searchTerm });
    } else {
        // filteredUSER_truck type = []
        dispatch({ name: STTF_STRING });
    }
    // console.log(filteredUSER_truck type)
    // else
    //     filteredUSER_truck type = []
    // await AppAxios.delete(`truck types/${truck typeId}`, getAuthAxiosConfig(token));
    // } catch (error: any) {
    //     const errorMessage = error.response?.USER_truck type?.message || error.message || 'Failed to delete truck type';
    //     dispatch({name: 'DELETE_USER_truck type_FAILURE', payload: errorMessage})
    //     console.error('Delete truck type failed:', errorMessage);
    //     throw new Error(errorMessage);
    // }
};
