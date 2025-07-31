// states/reducers/actions/user_truck type_service.ts (or src/actions/user_truck type_actions.ts)
import AppAxios, { getAuthAxiosConfig } from "../../../../utils/app_axios.ts";
import type { Dispatch } from "react";
import axios from "axios";
import { RequestStrings } from "../../request_strings.ts";
import type { AppActionType } from "../../app_action_type.ts";
import type { TypeModel } from "../../../../models/type_models.ts";

// --- Async Action Creators ---
export const fetchTypes = async (
    dispatch: Dispatch<AppActionType<TypeModel>>,
    token: string,
    classification: string
): Promise<void> => {
    // if (fetching)
    dispatch({ name: RequestStrings.FDR_STRING, payload: undefined });
    try {
        const response = await AppAxios.get(
            `types/class/${classification}`,
            getAuthAxiosConfig(token)
        );
        dispatch({
            name: RequestStrings.FDS_STRING,
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
            dispatch({
                name: RequestStrings.FDF_STRING,
                payload: errorMessage,
            });
        }
    }
};

export const addType = async (
    dispatch: Dispatch<AppActionType<TypeModel>>,
    token: string,
    classification: string,
    newTruckType: Omit<
        TypeModel,
        "id" | "created_at" | "updated_at" | "description"
    >
) => {
    // You might dispatch a 'ADD_truck type_REQUEST' here too, for a loading state on the form
    dispatch({ name: RequestStrings.ADR_STRING, payload: undefined });
    try {
        newTruckType.code = "trucks";
        newTruckType.classify = classification;
        const response = await AppAxios.post(
            "types",
            newTruckType,
            getAuthAxiosConfig(token)
        );
        dispatch({
            name: RequestStrings.ADS_STRING,
            payload: response.data.data,
        }); // Backend should return the created truck type with ID
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response!.statusText ||
                error.message ||
                "Failed to add truck type";
            dispatch({
                name: RequestStrings.ADF_STRING,
                payload: errorMessage,
            });
            console.error("Add truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editType = async (
    dispatch: Dispatch<AppActionType<TypeModel>>,
    token: string,
    updatedTruckType: TypeModel
) => {
    dispatch({ name: RequestStrings.EDR_STRING, payload: undefined });
    try {
        // Assuming API endpoint is /api/truck types/{id} for PUT/PATCH
        await AppAxios.put(
            `types/${updatedTruckType.id}`,
            updatedTruckType,
            getAuthAxiosConfig(token)
        );
        dispatch({
            name: RequestStrings.EDS_STRING,
            payload: updatedTruckType,
        });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to edit truck type";
            dispatch({
                name: RequestStrings.EDF_STRING,
                payload: errorMessage,
            });
            console.error("Edit truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const deleteType = async (
    dispatch: Dispatch<AppActionType<TypeModel>>,
    token: string,
    id: number
) => {
    dispatch({ name: RequestStrings.DDR_STRING, payload: undefined });
    try {
        await AppAxios.delete(`types/${id}`, getAuthAxiosConfig(token));
        dispatch({ name: RequestStrings.DDS_STRING, payload: id });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to delete truck type";
            dispatch({
                name: RequestStrings.DDF_STRING,
                payload: errorMessage,
            });
            console.error("Delete truck type failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const searchType = (
    dispatch: Dispatch<AppActionType<TypeModel>>,
    searchTerm: string,
    stillSearch: boolean
) => {
    if (!stillSearch)
        dispatch({ name: RequestStrings.SDR_STRING, payload: undefined });
    // try {
    // console.log(searchTerm)
    // let filteredUSER_truck type: TrucKType[]
    if (searchTerm.length > 0) {
        // filteredUSER_truck type = USER_truck type.filter((row) => row.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        dispatch({ name: RequestStrings.SDS_STRING, payload: searchTerm });
    } else {
        // filteredUSER_truck type = []
        dispatch({
            name: RequestStrings.SDF_STRING,
            payload: "nothing found",
        });
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
