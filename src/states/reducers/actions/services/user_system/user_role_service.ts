// states/reducers/actions/user_role_service.ts (or src/actions/user_role_actions.ts)
import AppAxios, {
    getAuthAxiosConfig,
} from "../../../../../utils/app_axios.ts";
import type { UserRole } from "../../../../../models/user_system/user_role_model.ts";
import type { Dispatch } from "react";
import {
    AURF_STRING,
    AURR_STRING,
    AURS_STRING,
    DURF_STRING,
    DURR_STRING,
    DURS_STRING,
    EURF_STRING,
    EURR_STRING,
    EURS_STRING,
    FURF_STRING,
    FURR_STRING,
    FURS_STRING,
    SURF_STRING,
    SURR_STRING,
    SURS_STRING,
    type UserRoleActionTypes,
} from "../../types/user_system/user_role_action_type.ts"; // For useReducer's dispatch name

// --- Async Action Creators ---
export const fetchUserRoles = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string
): Promise<void> => {
    // if (fetching)
    dispatch({ name: FURR_STRING });
    try {
        const response = await AppAxios.get("roles", getAuthAxiosConfig(token));
        dispatch({
            name: FURS_STRING,
            payload: response.data.data,
        });
        // console.log(`roles: ${response.data}`);
        console.log(response.data.data);
    } catch (error: any) {
        // Axios errors have a 'response' property
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to fetch roles";
        dispatch({ name: FURF_STRING, payload: errorMessage });
    }
};

export const addUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    newRole: Omit<
        UserRole,
        "id" | "is_locked" | "created_at" | "updated_at" | "description"
    >
) => {
    // You might dispatch a 'ADD_ROLE_REQUEST' here too, for a loading state on the form
    dispatch({ name: AURR_STRING });
    try {
        const response = await AppAxios.post(
            "roles",
            newRole,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: AURS_STRING, payload: response.data }); // Backend should return the created role with ID
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to add role";
        dispatch({ name: AURF_STRING, payload: errorMessage });
        console.error("Add role failed:", errorMessage);
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    updatedRole: UserRole
) => {
    dispatch({ name: EURR_STRING });
    try {
        // Assuming API endpoint is /api/roles/{id} for PUT/PATCH
        const response = await AppAxios.put(
            `roles/${updatedRole.id}`,
            updatedRole,
            getAuthAxiosConfig(token)
        );
        dispatch({ name: EURS_STRING, payload: response.data });
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to edit role";
        dispatch({ name: EURF_STRING, payload: errorMessage });
        console.error("Edit role failed:", errorMessage);
        // throw new Error(errorMessage);
    }
};

export const deleteUserRole = async (
    dispatch: Dispatch<UserRoleActionTypes>,
    token: string,
    id: number
) => {
    dispatch({ name: DURR_STRING });
    try {
        await AppAxios.delete(`roles/${id}`, getAuthAxiosConfig(token));
        dispatch({ name: DURS_STRING, payload: id });
    } catch (error: any) {
        const errorMessage =
            error.response?.USER_ROLE?.message ||
            error.message ||
            "Failed to delete role";
        dispatch({ name: DURF_STRING, payload: errorMessage });
        console.error("Delete role failed:", errorMessage);
        // throw new Error(errorMessage);
    }
};

export const searchUserRole = (
    dispatch: Dispatch<UserRoleActionTypes>,
    searchTerm: string,
    stillSearch: boolean
) => {
    if (!stillSearch) dispatch({ name: SURR_STRING });
    // try {
    // console.log(searchTerm)
    // let filteredUSER_ROLE: UserRole[]
    if (searchTerm.length > 0) {
        // filteredUSER_ROLE = USER_ROLE.filter((row) => row.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        dispatch({ name: SURS_STRING, payload: searchTerm });
    } else {
        // filteredUSER_ROLE = []
        dispatch({ name: SURF_STRING });
    }
    // console.log(filteredUSER_ROLE)
    // else
    //     filteredUSER_ROLE = []
    // await AppAxios.delete(`roles/${roleId}`, getAuthAxiosConfig(token));
    // } catch (error: any) {
    //     const errorMessage = error.response?.USER_ROLE?.message || error.message || 'Failed to delete role';
    //     dispatch({name: 'DELETE_USER_ROLE_FAILURE', payload: errorMessage})
    //     console.error('Delete role failed:', errorMessage);
    //     throw new Error(errorMessage);
    // }
};

// states/reducers/actions/user_role_service.ts (or src/actions/user_role_actions.ts)
// import AppAxios, {getAuthAxiosConfig} from "../../../utils/app_axios.ts"
// import name {UserRole} from "../../../models/users/user_role_model.ts";
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
