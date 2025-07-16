// states/reducers/actions/user_role_service.ts (or src/actions/user_role_actions.ts)
import AppAxios, {getAuthAxiosConfig} from "../../../utils/app_axios.ts"
import type {UserRole} from "../../../models/users/user_role_model.ts";
import type {Dispatch} from "react";
import type {DataActionTypes} from "../user_role_action_type.ts"; // For useReducer's dispatch type

// --- Async Action Creators ---
export const fetchUserRoles = async (dispatch: Dispatch<DataActionTypes<UserRole>>, token: string): Promise<void> => {
    dispatch({type: 'FETCH_DATA_REQUEST'});
    try {
        const response = await AppAxios.get('roles', getAuthAxiosConfig(token));
        dispatch({type: 'FETCH_DATA_SUCCESS', payload: response.data.data});
    } catch (error: any) {
        // Axios errors have a 'response' property
        const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch roles';
        dispatch({type: 'FETCH_DATA_FAILURE', payload: errorMessage});
    }
};

export const addUserRole = async (dispatch: Dispatch<DataActionTypes<UserRole>>, token: string, newRoleData: Omit<UserRole, 'id' | 'created_at' | 'updated_at'>) => {
    // You might dispatch a 'ADD_ROLE_REQUEST' here too, for a loading state on the form
    dispatch({type: 'ADD_DATA_REQUEST'})
    try {
        const response = await AppAxios.post('roles', newRoleData, getAuthAxiosConfig(token));
        dispatch({type: 'ADD_DATA_SUCCESS', payload: response.data}); // Backend should return the created role with ID
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to add role';
        dispatch({type: 'ADD_DATA_FAILURE', payload: errorMessage})
        console.error('Add role failed:', errorMessage);
        // throw new Error(errorMessage); // Re-throw to handle in component if needed
    }
};

export const editUserRole = async (dispatch: Dispatch<DataActionTypes<UserRole>>, token: string, updatedRole: UserRole) => {
    dispatch({type: 'EDIT_DATA_REQUEST'})
    try {
        // Assuming API endpoint is /api/roles/{id} for PUT/PATCH
        const response = await AppAxios.put(`roles/${updatedRole.id}`, updatedRole, getAuthAxiosConfig(token));
        dispatch({type: 'EDIT_DATA_SUCCESS', payload: response.data});
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to edit role';
        dispatch({type: 'EDIT_DATA_FAILURE', payload: errorMessage})
        console.error('Edit role failed:', errorMessage);
        // throw new Error(errorMessage);
    }
};

export const deleteUserRole = async (dispatch: Dispatch<DataActionTypes<UserRole>>, token: string, roleId: number) => {
    dispatch({type: 'DELETE_DATA_REQUEST'});
    try {
        await AppAxios.delete(`roles/${roleId}`, getAuthAxiosConfig(token));
        dispatch({type: 'DELETE_DATA_SUCCESS', payload: {id: roleId}});
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to delete role';
        dispatch({type: 'DELETE_DATA_FAILURE', payload: errorMessage})
        console.error('Delete role failed:', errorMessage);
        throw new Error(errorMessage);
    }
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
//
//     setLoading(true);
//     setError(null); // Clear any previous errors
//     try {
//         const response = await AppAxios.get('roles', getAuthAxiosConfig(token));
//         setUserRoles(response.data.data); // Update store with fetched data
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch roles';
//         setError(errorMessage);
//         console.error("Fetch Roles Error:", error);
//     } finally {
//         setLoading(false);
//     }
// };
//
// export const addUserRole = async (token: string, newRoleData: Omit<UserRole, 'id' | 'created_at' | 'updated_at'>): Promise<UserRole> => {
//     const {addRole, setError} = useUserRolesStore.getState();
//     try {
//         const response = await AppAxios.post<UserRole>('/api/roles', newRoleData, getAuthAxiosConfig(token));
//         addRole(response.data); // Add new role to store
//         setError(null); // Clear any previous error
//         return response.data; // Return added role for local component use (e.g., toast message)
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || error.message || 'Failed to add role';
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
//         editRole(response.data); // Update role in store
//         setError(null);
//         return response.data;
//     } catch (error: any) {
//         const errorMessage = error.response?.data?.message || error.message || 'Failed to edit role';
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
//         const errorMessage = error.response?.data?.message || error.message || 'Failed to delete role';
//         setError(errorMessage);
//         console.error('Delete role failed:', errorMessage);
//         throw new Error(errorMessage);
//     }
// };