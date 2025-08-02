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
