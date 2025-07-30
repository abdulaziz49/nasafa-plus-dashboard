// states/reducers/actions/USER_service.ts (or src/actions/USER_actions.ts)
import AppAxios, {
    getAuthAxiosConfig,
} from "../../../../../utils/app_axios.ts";
// import name { User } from "../../../../../models/user_system/user_models.ts";
import type { Dispatch } from "react";
import {
    type UserActionTypes,
} from "../../types/user_system/user_action_type.ts"; // For useReducer's dispatch name
import type { User } from "../../../../../models/user_system/user_models.ts";
import { RequestStrings } from "../../request_strings.ts";
import axios from "axios";

// --- Async Action Creators ---
export const fetchUsers = async (
    dispatch: Dispatch<UserActionTypes>,
    token: string
): Promise<void> => {
    // if (fetching)
    dispatch({ name: RequestStrings.FDR_STRING });
    try {
        const response = await AppAxios.get("users", getAuthAxiosConfig(token));
        console.log(response.data.data);
        dispatch({
            name: RequestStrings.FDS_STRING,
            payload: response.data.data,
        });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            // console.error(1111);
            // Axios errors have a 'response' property
            // let errorMessage = "Failed to fetch roles";
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to add role";
            //     if (typeof error === "object" && error !== null
            // )
            //     {
            // const err = error as {
            //     response?: { USER?: { message?: string } };
            //     message?: string;
            // };
            // errorMessage =
            //     err.response?.USER?.message ||
            //     err.message ||
            //     "Failed to fetch roles";
            console.log(error.message);
            // }
            dispatch({
                name: RequestStrings.FDF_STRING,
                payload: errorMessage,
            });
        }
    }
};

export const addUser = async (
    dispatch: Dispatch<UserActionTypes>,
    token: string,
    newRoleUSER: Omit<User, "id" | "created_at" | "updated_at">
) => {
    // You might dispatch a 'ADD_ROLE_REQUEST' here too, for a loading state on the form
    dispatch({ name: RequestStrings.ADR_STRING });
    try {
        const response = await AppAxios.post(
            "users",
            newRoleUSER,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: RequestStrings.ADS_STRING, payload: response.data }); // Backend should return the created role with ID
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to add role";
            dispatch({
                name: RequestStrings.ADF_STRING,
                payload: errorMessage,
            });
            console.error("Add role failed:", errorMessage);
        }
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editUser = async (
    dispatch: Dispatch<UserActionTypes>,
    token: string,
    updatedRole: User
) => {
    dispatch({ name: RequestStrings.EDR_STRING });
    try {
        // Assuming API endpoint is /api/roles/{id} for PUT/PATCH
        const response = await AppAxios.put(
            `users/${updatedRole.id}`,
            updatedRole,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: RequestStrings.EDS_STRING, payload: response.data });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to edit role";
            dispatch({
                name: RequestStrings.EDF_STRING,
                payload: errorMessage,
            });
            console.error("Edit role failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const deleteUser = async (
    dispatch: Dispatch<UserActionTypes>,
    token: string,
    id: number
) => {
    dispatch({ name: RequestStrings.DDR_STRING });
    try {
        await AppAxios.delete(`users/${id}`, getAuthAxiosConfig(token));
        dispatch({ name: RequestStrings.DDS_STRING, payload: id });
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const errorMessage =
                error.response?.statusText ||
                error.message ||
                "Failed to delete role";
            dispatch({
                name: RequestStrings.DDF_STRING,
                payload: errorMessage,
            });
            console.error("Delete role failed:", errorMessage);
        }
        // throw new Error(errorMessage);
    }
};

export const searchUser = (
    dispatch: Dispatch<UserActionTypes>,
    searchTerm: string,
    stillSearch: boolean
) => {
    if (!stillSearch) dispatch({ name: RequestStrings.SDR_STRING });
    // try {
    // console.log(searchTerm)
    // let filteredUSER: UserRole[]
    if (searchTerm.length > 0) {
        // filteredUSER = USER.filter((row) => row.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        dispatch({ name: RequestStrings.SDS_STRING, payload: searchTerm });
    } else {
        // filteredUSER = []
        dispatch({ name: RequestStrings.SDF_STRING });
    }
    // console.log(filteredUSER)
    // else
    //     filteredUSER = []
    // await AppAxios.delete(`roles/${roleId}`, getAuthAxiosConfig(token));
    // } catch (error: any) {
    //     const errorMessage = error.response?.USER?.message || error.message || 'Failed to delete role';
    //     dispatch({name: 'DELETE_USER_FAILURE', payload: errorMessage})
    //     console.error('Delete role failed:', errorMessage);
    //     throw new Error(errorMessage);
    // }
};

// states/reducers/actions/USER_service.ts (or src/actions/USER_actions.ts)
// import AppAxios, {getAuthAxiosConfig} from "../../../utils/app_axios.ts"
// import name {UserRole} from "../../../models/users/USER_model.ts";
// import {useUserRolesStore} from "../../stores/USER_store.ts";
// // import {useUserRolesStore} from '../../states/stores/USERs_store.ts'; // Import the Zustand store
//
// // --- Async Action Creators ---
//
// export const fetchUserRoles = async (token: string): Promise<void> => {
//     // Get store actions
//     const {setLoading, setError, setUserRoles} = useUserRolesStore.getState();
//}
//     setLoading(true);
//     setError(null); // Clear any previous errors
//     try {
//         const response = await AppAxios.get('roles', getAuthAxiosConfig(token));
//         setUserRoles(response.USER.USER); // Update store with fetched USER
//     } catch (error: any) {
//         const errorMessage = error.response?.USER?.message || error.message || 'Failed to fetch roles';
//         setError(errorMessage);
//         console.error("Fetch Roles Error:", error);
//     } finally {
//         setLoading(false);
//     }
// };
//
// export const addUserRole = async (token: string, newRoleUSER: Omit<UserRole, 'id' | 'created_at' | 'updated_at'>): Promise<UserRole> => {
//     const {addRole, setError} = useUserRolesStore.getState();
//     try {
//         const response = await AppAxios.post<UserRole>('/api/roles', newRoleUSER, getAuthAxiosConfig(token));
//         addRole(response.USER); // Add new role to store
//         setError(null); // Clear any previous error
//         return response.USER; // Return added role for local component use (e.g., toast message)
//     } catch (error: any) {
//         const errorMessage = error.response?.USER?.message || error.message || 'Failed to add role';
//         setError(errorMessage);
//         console.error('Add role failed:', errorMessage);
//         throw new Error(errorMessage);
//     }
// };
//
// export const editUserRole = async (token: string, updatedRole: UserRole): Promise<UserRole> => {
//     const {editRole, setError} = useUserRolesStore.getState();
//     try {
//         const response = await AppAxios.put<UserRole>(`/api/roles/${updatedRole.id}`, updatedRole, getAuthAxiosConfig(token));
//         editRole(response.USER); // Update role in store
//         setError(null);
//         return response.USER;
//     } catch (error: any) {
//         const errorMessage = error.response?.USER?.message || error.message || 'Failed to edit role';
//         setError(errorMessage);
//         console.error('Edit role failed:', errorMessage);
//         throw new Error(errorMessage);
//     }
// };
//
// export const deleteUserRole = async (token: string, roleId: number): Promise<void> => {
//     const {deleteRole, setError} = useUserRolesStore.getState();
//     try {
//         await AppAxios.delete(`/api/roles/${roleId}`, getAuthAxiosConfig(token));
//         deleteRole(roleId); // Remove role from store
//         setError(null);
//     } catch (error: any) {
//         const errorMessage = error.response?.USER?.message || error.message || 'Failed to delete role';
//         setError(errorMessage);
//         console.error('Delete role failed:', errorMessage);
//         throw new Error(errorMessage);
//     }
// };
