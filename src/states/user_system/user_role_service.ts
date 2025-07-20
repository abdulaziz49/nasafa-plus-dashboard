// states/reducers/actions/user_role_service.ts (or src/actions/user_role_actions.ts)
import AppAxios, {
    getAuthAxiosConfig,
} from "../../../../../utils/app_axios.ts";
import type { UserRole } from "../../../../../models/user_system/user_role_model.ts";
import type { Dispatch } from "react";
import type { UserRoleActionTypes } from "../../../types/user_system/user_role_action_type.ts"; // For useReducer's dispatch type

// --- Async Action Creators ---
export const fetchUserRoles = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string
): Promise<void> => {
    // if (fetching)
    dispatch({ type: "FETCH_USER_ROLES_REQUEST" });
    try {
        const response = await AppAxios.get("roles", getAuthAxiosConfig(token));
        dispatch({
            type: "FETCH_USER_ROLES_SUCCESS",
            payload: response.data.data,
        });
    } catch (error: any) {
        // Axios errors have a 'response' property
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to fetch roles";
        dispatch({ type: "FETCH_USER_ROLES_FAILURE", payload: errorMessage });
    }
};

export const addUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    newRoleUSER_ROLE: Omit<UserRole, "id" | "created_at" | "updated_at">
) => {
    // You might dispatch a 'ADD_ROLE_REQUEST' here too, for a loading state on the form
    dispatch({ type: "ADD_USER_ROLE_REQUEST" });
    try {
        const response = await AppAxios.post(
            "roles",
            newRoleUSER_ROLE,
            getAuthAxiosConfig(token)
        );
        dispatch({ type: "ADD_USER_ROLE_SUCCESS", payload: response.data }); // Backend should return the created role with ID
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to add role";
        dispatch({ type: "ADD_USER_ROLE_FAILURE", payload: errorMessage });
        console.error("Add role failed:", errorMessage);
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    updatedRole: UserRole
) => {
    dispatch({ type: "EDIT_USER_ROLE_REQUEST" });
    try {
        // Assuming API endpoint is /api/roles/{id} for PUT/PATCH
        const response = await AppAxios.put(
            `roles/${updatedRole.id}`,
            updatedRole,
            getAuthAxiosConfig(token)
        );
        dispatch({ type: "EDIT_USER_ROLE_SUCCESS", payload: response.data });
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to edit role";
        dispatch({ type: "EDIT_USER_ROLE_FAILURE", payload: errorMessage });
        console.error("Edit role failed:", errorMessage);
        // throw new Error(errorMessage);
    }
};

export const deleteUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    id: number
) => {
    dispatch({ type: "DELETE_USER_ROLE_REQUEST" });
    try {
        await AppAxios.delete(`roles/${id}`, getAuthAxiosConfig(token));
        dispatch({ type: "DELETE_USER_ROLE_SUCCESS", payload: id });
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to delete role";
        dispatch({ type: "DELETE_USER_ROLE_FAILURE", payload: errorMessage });
        console.error("Delete role failed:", errorMessage);
        // throw new Error(errorMessage);
    }
};

export const searchUserRole = (
    dispatch: Dispatch<UserRoleActionTypes>,
    searchTerm: string,
    stillSearch: boolean
) => {
    if (!stillSearch) dispatch({ type: "SEARCH_USER_ROLES_REQUEST" });
    // try {
    // console.log(searchTerm)
    // let filteredUSER_ROLE: UserRole[]
    if (searchTerm.length > 0) {
        // filteredUSER_ROLE = USER_ROLE.filter((row) => row.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        dispatch({ type: "SEARCH_USER_ROLES_SUCCESS", payload: searchTerm });
    } else {
        // filteredUSER_ROLE = []
        dispatch({ type: "SEARCH_USER_ROLES_FAILURE" });
    }
    // console.log(filteredUSER_ROLE)
    // else
    //     filteredUSER_ROLE = []
    // await AppAxios.delete(`roles/${roleId}`, getAuthAxiosConfig(token));
    // } catch (error: any) {
    //     const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to delete role';
    //     dispatch({type: 'DELETE_USER_ROLE_FAILURE', payload: errorMessage})
    //     console.error('Delete role failed:', errorMessage);
    //     throw new Error(errorMessage);
    // }
};

// states/reducers/actions/user_role_service.ts (or src/actions/user_role_actions.ts)
// import AppAxios, {getAuthAxiosConfig} from "../../../utils/app_axios.ts"
// import type {UserRole} from "../../../models/users/user_role_model.ts";
// import {useUserRolesStore} from "../../stores/user_role_store.ts";
// // import {useUserRolesStore} from '../../states/stores/user_roles_store.ts'; // Import the Zustand store
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
//         setUserRoles(response.USER_ROLE.USER_ROLE); // Update store with fetched USER_ROLE
//     } catch (error: any) {
//         const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to fetch roles';
//         setError(errorMessage);
//         console.error("Fetch Roles Error:", error);
//     } finally {
//         setLoading(false);
//     }
// };
//
// export const addUserRole = async (token: string, newRoleUSER_ROLE: Omit<UserRole, 'id' | 'created_at' | 'updated_at'>): Promise<UserRole> => {
//     const {addRole, setError} = useUserRolesStore.getState();
//     try {
//         const response = await AppAxios.post<UserRole>('/api/roles', newRoleUSER_ROLE, getAuthAxiosConfig(token));
//         addRole(response.USER_ROLE); // Add new role to store
//         setError(null); // Clear any previous error
//         return response.USER_ROLE; // Return added role for local component use (e.g., toast message)
//     } catch (error: any) {
//         const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to add role';
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
//         editRole(response.USER_ROLE); // Update role in store
//         setError(null);
//         return response.USER_ROLE;
//     } catch (error: any) {
//         const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to edit role';
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
//         const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to delete role';
//         setError(errorMessage);
//         console.error('Delete role failed:', errorMessage);
//         throw new Error(errorMessage);
//     }
// };
