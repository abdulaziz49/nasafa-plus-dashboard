// For CRUD operations (assuming these will also be API calls eventually)
import type {UserRole} from "../../../models/users/user_role_model.ts";

export type DataActionTypes =
    // For fetching data
    | { type: 'FETCH_DATA_REQUEST' }
    | { type: 'FETCH_DATA_SUCCESS'; payload: UserRole[] }
    | { type: 'FETCH_DATA_FAILURE'; payload: string }

    // For adding data
    | { type: 'ADD_DATA_REQUEST' }
    | { type: 'ADD_DATA_SUCCESS'; payload: UserRole }
    | { type: 'ADD_DATA_FAILURE'; payload: string } 
    
    // For editing data
    | { type: 'EDIT_DATA_REQUEST' }
    | { type: 'EDIT_DATA_SUCCESS'; payload: UserRole }
    | { type: 'EDIT_DATA_FAILURE'; payload: string } 
    
    // For deleting data
    | { type: 'DELETE_DATA_REQUEST' }
    | { type: 'DELETE_DATA_SUCCESS'; payload: number }
    | { type: 'DELETE_DATA_FAILURE'; payload: string } 

    // For searching data
    | { type: 'SEARCH_DATA_REQUEST'; }
    | { type: 'SEARCH_DATA_SUCCESS'; payload: string }
    | { type: 'SEARCH_DATA_FAILURE'; };