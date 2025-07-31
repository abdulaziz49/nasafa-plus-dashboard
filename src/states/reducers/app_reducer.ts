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
// const fetchUSER_ROLE = (value: UserRolesState, token: string) => {
//     const fetchingUSER_ROLE = async () => {
//         try {
//             value.fetching = true
//
//             const response = await AppAxios.get('roles', getAuthAxiosConfig(token))
//             value.userRoles = response.USER_ROLE
//         } catch (error: any) {
//             value.error = error.message
//         } finally {
//             value.fetching = false
//         }
//         // return value
//     }
//     fetchingUSER_ROLE()
//     // value = fetchingUSER_ROLE()
//     return value
// }
// // const fetchUSER_ROLE = (value: UserRolesState, token: string): UserRolesState => {
// //     value.fetching = true
// //     AppAxios.get('roles', getAuthAxiosConfig(token))
// //         .then(response => value.userRoles = response.USER_ROLE)
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
//             state = fetchUSER_ROLE(state, action.payload.token)
//             // state.fetching = true
//             // AppAxios.get('roles', getAuthAxiosConfig(action.payload.token))
//             //     .then(response => state.userRoles = response.USER_ROLE)
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

// import type { TruckTypeState } from "../../../../models/truck/truck_type_models.ts";
// import {
//     // ADF_STRING,
//     // ADR_STRING,
//     // ADS_STRING,
//     // DDF_STRING,
//     // DDR_STRING,
//     // DDS_STRING,
//     // EDF_STRING,
//     // EDR_STRING,
//     // EDS_STRING,
//     // FDF_STRING,
//     // FDR_STRING,
//     // FDS_STRING,
//     // SDF_STRING,
//     // SDR_STRING,
//     // SDS_STRING,
//     type TruckTypeActionTypes,
// } from "../../actions/types/truck/truck_type_action_type.ts";
// import type { TruckType } from "../../models/truck/truck_type_models.ts";
// import type { AppActionType } from "./app_action_type.ts";
// import type AppStateModel from "./app_state_model.ts";
// import { RequestStrings } from "./request_strings.ts";
// // AppAxios and getAuthAxiosConfig are NOT imported directly into the reducer.
// // Async logic should happen outside the reducer.

// // --- Define more granular actions for async operations ---

// // --- The Reducer Function (Pure and Immutable) ---
// export function getInitialAppState<T>(): AppStateModel<T> {
//     return {
//         mainStore: [],
//         secondaryStore: [],
//         fetching: false,
//         adding: false,
//         editing: false,
//         searching: false,
//         deleting: false,
//         printing: false,
//         exporting: false,
//         error: null,
//     } as AppStateModel<T>;
//     // return initialAppState;
// }
// export default function AppReducer<T>(
//     state: AppStateModel<T>,
//     action: AppActionType<T>
// ): T {
//     switch (action.name) {
//         // For fetching cases
//         case RequestStrings.FDR_STRING:
//             return {
//                 ...state,
//                 fetching: true,
//                 error: null, // Clear any previous errors on new request
//             };
//         case RequestStrings.FDS_STRING:
//             return {
//                 ...state,
//                 fetching: false,
//                 error: null,
//                 mainStore: action.payload, // Replace roles with fetched USER_ROLE
//             };
//         case RequestStrings.FDF_STRING:
//             return {
//                 ...state,
//                 fetching: false,
//                 error: action.payload, // Set the error message
//                 mainStore: [], // Clear roles or keep old ones depending on desired UX
//             };

//         // For adding cases
//         case RequestStrings.ADR_STRING:
//             return {
//                 ...state,
//                 adding: true,
//                 error: null, // Clear any previous errors on new request
//             };
//         case RequestStrings.ADS_STRING:
//             return {
//                 ...state,
//                 mainStore: [...state.mainStore, action.payload],
//                 adding: false,
//                 error: null,
//             };
//         case RequestStrings.ADF_STRING:
//             return {
//                 ...state,
//                 adding: false,
//                 error: action.payload, // Set the error message
//             };

//         // For editing cases
//         case RequestStrings.EDR_STRING:
//             return {
//                 ...state,
//                 editing: true,
//                 error: null, // Clear any previous errors on new request
//             };
//         case RequestStrings.EDS_STRING:
//             return {
//                 ...state,
//                 mainStore: state.mainStore.map((truckType) =>
//                     truckType.id === action.payload.id
//                         ? action.payload
//                         : truckType
//                 ),
//                 error: null,
//                 editing: false,
//             };
//         case RequestStrings.EDF_STRING:
//             return {
//                 ...state,
//                 editing: false,
//                 error: action.payload, // Set the error message
//             };

//         // For deleting cases
//         case RequestStrings.DDR_STRING:
//             return {
//                 ...state,
//                 deleting: true,
//                 error: null, // Clear any previous errors on new request
//             };
//         case RequestStrings.DDS_STRING:
//             return {
//                 ...state,
//                 mainStore: state.mainStore.filter(
//                     (truckType) => action.payload !== truckType.id
//                 ),
//                 deleting: false,
//                 error: null,
//             };
//         case RequestStrings.DDF_STRING:
//             return {
//                 ...state,
//                 deleting: false,
//                 error: action.payload, // Set the error message
//             };

//         // For searching cases
//         case RequestStrings.SDR_STRING:
//             return {
//                 ...state,
//                 searching: true,
//                 secondaryStore: state.mainStore,
//             };
//         case RequestStrings.SDS_STRING:
//             return {
//                 ...state,
//                 error: null,
//                 mainStore: state.secondaryStore.filter((row) =>
//                     row.name
//                         .toLowerCase()
//                         .includes(action.payload.toLowerCase())
//                 ), // Replace roles with fetched USER_ROLE
//             };
//         case RequestStrings.SDF_STRING:
//             return {
//                 ...state,
//                 searching: false,
//                 mainStore: state.secondaryStore,
//                 secondaryStore: [],
//             };

//         default: {
//             // Ensure all action types are handled, or throw for unhandled ones
//             const exhaustiveCheck: unknown = action;
//             throw new Error(`Unhandled action type: ${exhaustiveCheck}`);
//         }
//     }
// }

import type { AppActionType } from "./app_action_type.ts";
import type AppStateModel from "./app_state_model.ts";
import { RequestStrings } from "./request_strings.ts";

export interface IdentifiableAndNameable {
    id: number; // Use 'number' or 'string' if your IDs are consistently typed
    name: string;
}

// AppAxios and getAuthAxiosConfig are NOT imported directly into the reducer.
// Async logic should happen outside the reducer.

// --- The Reducer Function (Pure and Immutable) ---
// Add the type constraint <T extends IdentifiableAndNameable>
export function getInitialAppState<
    T extends IdentifiableAndNameable
>(): AppStateModel<T> {
    return {
        mainStore: [],
        secondaryStore: [],
        fetching: false,
        adding: false,
        editing: false,
        searching: false,
        deleting: false,
        printing: false,
        exporting: false,
        error: null,
    };
}

// Add the type constraint <T extends IdentifiableAndNameable>
// The reducer must return AppStateModel<T>, not just T
export default function AppReducer<T extends IdentifiableAndNameable>(
    state: AppStateModel<T>,
    action: AppActionType<T>
): AppStateModel<T> {
    switch (action.name) {
        // For fetching cases
        case RequestStrings.FDR_STRING:
            return {
                ...state,
                fetching: true,
                error: null, // Clear any previous errors on new request
            };
        case RequestStrings.FDS_STRING:
            return {
                ...state,
                fetching: false,
                error: null,
                mainStore: action.payload as T[], // Assert payload type
            };
        case RequestStrings.FDF_STRING:
            return {
                ...state,
                fetching: false,
                error: action.payload as string, // Assert payload type
                mainStore: [], // Clear roles or keep old ones depending on desired UX
            };

        // For adding cases
        case RequestStrings.ADR_STRING:
            return {
                ...state,
                adding: true,
                error: null, // Clear any previous errors on new request
            };
        case RequestStrings.ADS_STRING:
            return {
                ...state,
                mainStore: [...state.mainStore, action.payload as T], // Assert payload type
                adding: false,
                error: null,
            };
        case RequestStrings.ADF_STRING:
            return {
                ...state,
                adding: false,
                error: action.payload as string, // Assert payload type
            };

        // For editing cases
        case RequestStrings.EDR_STRING:
            return {
                ...state,
                editing: true,
                error: null, // Clear any previous errors on new request
            };
        case RequestStrings.EDS_STRING:
            return {
                ...state,
                mainStore: state.mainStore.map((item) =>
                    // Directly use action.payload.id (now correctly typed)
                    item.id === (action.payload as T).id
                        ? (action.payload as T) // Assert payload type
                        : item
                ),
                error: null,
                editing: false,
            };
        case RequestStrings.EDF_STRING:
            return {
                ...state,
                editing: false,
                error: action.payload as string, // Assert payload type
            };

        // For deleting cases
        case RequestStrings.DDR_STRING:
            return {
                ...state,
                deleting: true,
                error: null, // Clear any previous errors on new request
            };
        case RequestStrings.DDS_STRING:
            return {
                ...state,
                mainStore: state.mainStore.filter(
                    // action.payload is the ID to delete, so it should be directly comparable to item.id
                    (item) => (action.payload as number) !== item.id // Assert payload type, 'any' here as the id could be number/string
                ),
                deleting: false,
                error: null,
            };
        case RequestStrings.DDF_STRING:
            return {
                ...state,
                deleting: false,
                error: action.payload as string, // Assert payload type
            };

        // For searching cases
        case RequestStrings.SDR_STRING:
            return {
                ...state,
                searching: true,
                secondaryStore: state.mainStore,
                error: null, // Clear any previous errors on new request
            };
        case RequestStrings.SDS_STRING:
            return {
                ...state,
                error: null,
                // Access `name` property, which is guaranteed by `IdentifiableAndNameable`
                mainStore: state.secondaryStore.filter(
                    (row) =>
                        row.name
                            .toLowerCase()
                            .includes((action.payload as string).toLowerCase()) // Assert payload type
                ),
                searching: false, // Searching is complete
            };
        case RequestStrings.SDF_STRING:
            return {
                ...state,
                searching: false,
                mainStore: state.secondaryStore, // Restore mainStore on search failure/completion
                secondaryStore: [],
                error: action.payload as string | null, // Assert payload type
            };

        default: {
            // This ensures that all action types are handled, or throws an error
            // action.name is of type RequestStringLiteral, so using `never` here is appropriate
            // as it should be exhaustive if all cases are covered.
            const exhaustiveCheck: never = action;
            throw new Error(`Unhandled action type: ${exhaustiveCheck}`);
        }
    }
}
