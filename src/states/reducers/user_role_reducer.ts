// import type {UserRole, UserRolesState} from "../../models/users/user_role_model.ts";
// import AppAxios, {getAuthAxiosConfig} from "../../utils/app_axios.ts";
//
// // export const userRoleInitialState: UserRolesState = {
// //     userRoles: [
// //         {
// //             id: 1,
// //             name: 'Admin',
// //             guard_name: 'Full access to the system',
// //             permissions: ["101"],
// //             created_at: Date().toString(),
// //             updated_at: Date().toString()
// //         },
// //         {
// //             id: 2,
// //             name: 'Editor',
// //             guard_name: 'Can create and edit content',
// //             permissions: ["101"],
// //             created_at: Date().toString(),
// //             updated_at: Date().toString()
// //         },
// //         {
// //             id: 3,
// //             name: 'Viewer',
// //             guard_name: 'Can view content only',
// //             permissions: ["101"],
// //             created_at: Date().toString(),
// //             updated_at: Date().toString()
// //         },
// //         {
// //             id: 4,
// //             name: 'Moderator',
// //             guard_name: 'Manages user comments and forums',
// //             permissions: ["101"],
// //             created_at: Date().toString(),
// //             updated_at: Date().toString()
// //         },
// //     ],
// //     searchTerm: '',
// //     fetching: false,
// //     error: null
// // };
//
// type UserRolesAction =
//     | { type: 'GET_ROLE'; payload: { token: string, id: number } }
//     | { type: 'ADD_ROLE'; payload: Omit<UserRole, 'id'> } // Omit 'id' because it will be generated
//     | { type: 'EDIT_ROLE'; payload: UserRole }
//     | { type: 'DELETE_ROLE'; payload: { id: number } }
//     | { type: 'SET_SEARCH_TERM'; payload: { term: string } };
//
// const fetchData = (value: UserRolesState, token: string) => {
//     const fetchingData = async () => {
//         try {
//             value.fetching = true
//
//             const response = await AppAxios.get('roles', getAuthAxiosConfig(token))
//             value.userRoles = response.data
//         } catch (error: any) {
//             value.error = error.message
//         } finally {
//             value.fetching = false
//         }
//         // return value
//     }
//     fetchingData()
//     // value = fetchingData()
//     return value
// }
// // const fetchData = (value: UserRolesState, token: string): UserRolesState => {
// //     value.fetching = true
// //     AppAxios.get('roles', getAuthAxiosConfig(token))
// //         .then(response => value.userRoles = response.data)
// //         .catch((error: any) => value.error = error.message)
// //         .then(() => value.fetching = false)
// //     return value
// //
// // }
//
// export default function UserRoleReducer(state: UserRolesState, action: UserRolesAction): UserRolesState {
//     switch (action.type) {
//         case 'GET_ROLE': {
//             // try {
//             //
//             // }
//             state = fetchData(state, action.payload.token)
//             // state.fetching = true
//             // AppAxios.get('roles', getAuthAxiosConfig(action.payload.token))
//             //     .then(response => state.userRoles = response.data)
//             //     .catch((error: any) => state.error = error.message)
//             //     .then(() => state.fetching = false)
//             return state
//         }
//
//         case 'ADD_ROLE': {
//             // Generate a simple unique ID (for a real app, use a robust ID generator like uuid)
//             const newRole: UserRole = {
//                 ...action.payload,
//                 id: Date.now(), // Simple unique ID
//             };
//             return {
//                 ...state,
//                 userRoles: [...state.userRoles, newRole],
//             };
//         }
//         case 'EDIT_ROLE':
//             return {
//                 ...state,
//                 userRoles: state.userRoles.map((role) =>
//                     role.id === action.payload.id ? action.payload : role
//                 ),
//             };
//
//         case 'DELETE_ROLE':
//             return {
//                 ...state,
//                 userRoles: state.userRoles.filter((role) => action.payload.id !== role.id),
//             };
//
//         case 'SET_SEARCH_TERM':
//             return {
//                 ...state,
//                 searchTerm: action.payload.term,
//             };
//
//         default:
//             // It's good practice to throw an error for unknown action types
//             throw new Error(`Unhandled action type: ${(action as UserRolesAction).type}`);
//     }
// }

import type {UserRole, UserRolesState} from "../../models/users/user_role_model.ts";
import type {DataActionTypes} from "./user_role_action_type.ts";
// AppAxios and getAuthAxiosConfig are NOT imported directly into the reducer.
// Async logic should happen outside the reducer.

// --- Define more granular actions for async operations ---


export const initialViewState: UserRolesState = {
    userRoles: [],
    searchTerm: "",
    fetching: false,
    adding: false,
    editing: false,
    searching: false,
    deleting: false,
    printing: false,
    exporting: false,
    error: null
}

// --- The Reducer Function (Pure and Immutable) ---
export default function UserRoleReducer(state: UserRolesState, action: DataActionTypes<UserRole>): UserRolesState {
    switch (action.type) {
        // For fetching cases
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                fetching: true,
                error: null, // Clear any previous errors on new request
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                fetching: false,
                error: null,
                userRoles: action.payload, // Replace roles with fetched data
            };
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                fetching: false,
                error: action.payload, // Set the error message
                userRoles: [], // Clear roles or keep old ones depending on desired UX
            };

        // For adding cases
        case 'ADD_DATA_REQUEST':
            return {
                ...state,
                adding: true,
                error: null, // Clear any previous errors on new request
            };
        case 'ADD_DATA_SUCCESS':
            return {
                ...state,
                userRoles: [...state.userRoles, action.payload],
                adding: false,
                error: null
            };
        case 'ADD_DATA_FAILURE':
            return {
                ...state,
                adding: false,
                error: action.payload, // Set the error message
            };

        // For editin cases
        case 'EDIT_DATA_REQUEST':
            return {
                ...state,
                editing: true,
                error: null, // Clear any previous errors on new request
            };
        case 'EDIT_DATA_SUCCESS':
            return {
                ...state,
                userRoles: state.userRoles.map((role) =>
                    role.id === action.payload.id ? action.payload : role
                ),
                error: null,
                editing: false,
            };
        case 'EDIT_DATA_FAILURE':
            return {
                ...state,
                editing: false,
                error: action.payload, // Set the error message
            };

        // For editin cases
        case 'DELETE_DATA_REQUEST':
            return {
                ...state,
                deleting: true,
                error: null, // Clear any previous errors on new request
            };
        case 'DELETE_DATA_SUCCESS':
            return {
                ...state,
                userRoles: state.userRoles.filter((role) => action.payload.id !== role.id),
                deleting: false,
                error: null
            };
        case 'DELETE_DATA_FAILURE':
            return {
                ...state,
                deleting: false,
                error: action.payload, // Set the error message
            };

        // For searching cases
        case 'SEARCH_DATA_REQUEST':
            return {
                ...state,
                searchTerm: action.payload.term,
                searching: true
            };
        case 'SEARCH_DATA_SUCCESS':
            return {
                ...state,
                searching: false,
                error: null,
                userRoles: action.payload, // Replace roles with fetched data
            };
        case 'SEARCH_DATA_FAILURE':
            return {
                ...state,
                searching: false,
                error: action.payload, // Set the error message
                userRoles: [], // Clear roles or keep old ones depending on desired UX
            };

        default: {
            // Ensure all action types are handled, or throw for unhandled ones
            const exhaustiveCheck: any = action;
            throw new Error(`Unhandled action type: ${exhaustiveCheck.type}`);
        }
    }
}